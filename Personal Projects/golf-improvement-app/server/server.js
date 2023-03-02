const express = require('express');
const path = require("path");
const router = require('./routes/api');

const app = express();
app.use(express.json());


// app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

const PORT = 3000;

// static files from the 'build' folder
app.use(express.static(path.join(__dirname, 'public')));

// send all api calls to the router
app.use('/api', router);


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// express universal error handling 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error has occured' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status.json(errorObj.message));
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});