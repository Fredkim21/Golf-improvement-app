const cookieParser = require('cookie-parser');

// middleware function to set user ID cookie
const setUserIdCookie = (req, res, next) => {
  const { user_id } = req.body; // assuming the user ID is in the request body
  res.cookie('user_id', user_id, { maxAge: 3600000 }); // set cookie to expire in 1 hour
  next();
};



