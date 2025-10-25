//Import and configure dotenv
require('dotenv').config(); 
//Require
const express = require('express');
const indexRouter = require('./routes/indexRouter');
const path = require('node:path');


//console.log(process.env);

//Create Server
app = express();

//Setup app
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middleware to parse the form data into req.body
app.use(express.urlencoded({ extended: true }));

//Declare Variable
const port = process.env.PORT || 4000 
//const port = 3012;

//Routes
app.use('/', indexRouter);

//Catch Errors
/* app.use((err,req,res,next) => {
    console.log(err);
    res.status(err.statusCode || 500).send(err.message);
}); */

//Server Listening
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

