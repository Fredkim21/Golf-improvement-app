const cookieParser = require('cookie-parser');

const cookieController = {}
// middleware function to set user ID cookie
cookieController.setUserIdCookie = (req, res, next) => {
  const { user_id } = res.locals.user; 
  res.cookie('user_id', user_id, { maxAge: 3600000 }, { httpOnly: true }); // set cookie to expire in 1 hour
  next();
};



module.exports = cookieController;