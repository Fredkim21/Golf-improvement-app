const express = require('express');
const router = express.Router();

const golfController = require('../controller/controllers');
const userController = require('../controller/controllers');

const cookieController = require('../controller/cookie')

// Golf API Endpoints
// router.get('/drills', golfController.getAllDrills);
// router.get('/drills/:id', golfController.getSingleDrill);
// router.post('/drills', golfController.addNewDrill ());
// router.put('/drills/:id', golfController.updateDrill);

// // User API Endpoints
// router.post('/signup', userController.signup, cookieController.setUserIdCookie,
//   (req, res) => {
//     const userId = req.locals.user.user_id;
//     const profileUrl = `/profile?user_id=${userId}`;
//     res.status(200).json({ profileUrl });
//   });

// router.post('/login', userController.loginUser, cookieController.setUserIdCookie,
//   (req, res) => {
//   const userId = req.locals.user.user_id;
//   const profileUrl = `/profile?user_id=${userId}`;
//   res.status(200).json({ profileUrl });
// });
// router.get('/profile/:userId', userController.getProfile);
// router.put('/user/:user_id/score', userController.updateUserScore);

module.exports = router;
