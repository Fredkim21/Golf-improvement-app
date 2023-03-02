const { query } = require('../database/pgdb');


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

userController.signup = async (req, res, next) => {
  try {
    const { username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createText =
      "INSERT INTO users_credentials (user_id, username, password) VALUES (DEFAULT, $1, $2) RETURNING user_id";
    const { rows } = await query(createText, [username, hashedPassword]);
    res.locals.user = rows[0]
    return next();
  } catch (error) {
    return next(error);
  }
};

userController.loginUser = async (req, res, next) => {
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
    res.locals.user = rows[0];
    return next();
  } catch (error) {
    return next(error);
  }
};

userController.getProfile = async (req, res, next) => {
  try {
    const userId = req.cookies.user_id;
    if (!userId) {
      return res.status(401).send('User not authenticated');
    }
    const getProfileText = 'SELECT * FROM users WHERE user_id = $1';
    const { rows } = await pool.query(getProfileText, [userId]);
    if(rows.length === 0) {
      return res.status(401).send('Invalid user');
    }
    res.locals.profile = rows[0];
    return next();
  } catch (error) {
    return next(error);
  }
};


userController.updateUserScore = async (req, res) => {
  const userId = req.cookies.user_id
  const { category, rating } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM users WHERE user_id = $1",
      [userId]
    );
    if (result.rowCount === 0) {
      client.release();
      return res.status(404).json({ message: "User not found" });
    }

    const updatedScore = { ...result.rows[0].score };
    updatedScore[category] += (rating / 2);

    await client.query(
      "UPDATE users SET score = $1 WHERE user_id = $2",
      [updatedScore, userId]
    );

    client.release();
    res.json({ message: "User score updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};



module.exports = golfController, userController;