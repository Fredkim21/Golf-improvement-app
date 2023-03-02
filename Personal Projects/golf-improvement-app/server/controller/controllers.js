const { query } = require('../models/golfModels');


const golfController = {};

golfController.getAllDrills = async () => {
  try {
    const { rows } = await query('SELECT * FROM drills');
    return rows;
  } catch (err) {
    console.log(err.message);
  }
};

golfController.getSingleDrill = async (drillId) => {
  try {
    const result = await query('SELECT * FROM drills WHERE drill_id = $1', [drillId]);
    return result.rows[0];
  } catch (err) {
    console.error(err.message);
  }
};

golfController.addNewDrill = async (newDrill) => {
  try {
    const { drill_info, name, skillLevel, category } = newDrill;
    const result = await query(
      'INSERT INTO drills (drill_info, name, skillLevel, category) VALUES ($1, $2, $3, $4) RETURNING *',
      [drill_info, name, skillLevel, category]
    );
    return result.rows[0];
  } catch (err) {
    console.log(err.message);
  }
};

golfController.updateDrill = async (drillId, updatedDrill) => {
  try {
    const { drill_info, name, skillLevel, category } = updatedDrill;
    const result = await query(
      'UPDATE drills SET drill_info = $1, name = $2, skillLevel = $3, category = $4 WHERE drill_id = $5 RETURNING *',
      [drill_info, name, skillLevel, category, drillId]
    );
    return result.rows[0];
  } catch (err) {
    console.error(err.message);
  }
};


const userController = {};

userController.createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    // insert new user into database
    const insertUserText = 'INSERT INTO users_credentials (user_id, username, password) VALUES (DEFAULT, $1, $2) RETURNING *';
    const { rows } = await query(insertUserText, [username, password]);
    // insert user email into database
    const userId = rows[0].user_id;
    const insertEmailText = 'INSERT INTO users (user_id, email) VALUES ($1, $2)';
    await query(insertEmailText, [userId, email]);
    res.status(201).send(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
};

userController.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // get user from database
    const getUserText = 'SELECT * FROM users_credentials WHERE username = $1';
    const { rows } = await query(getUserText, [username]);
    if (rows.length === 0) {
      return res.status(401).send('Invalid username or password');
    }
    const hashedPassword = rows[0].password;
    // compare passwords
    const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
    if (!isPasswordMatch) {
      return res.status(401).send('Invalid username or password');
    }
    res.status(200).send('Login successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
};

userController.getProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const getProfileText = 'SELECT * FROM users WHERE user_id = $1';
    const { rows } = await query(getProfileText, [userId]);
    if(rows.length === 0) {
      return res.status(401).send('Invalid user');
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('error getting user');
  }
};

module.exports = golfController, userController;