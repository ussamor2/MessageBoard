//Require Router out of express.router
const { Router } = require('express');
//Import controller
const { messageGet, newMessagePOST } = require('../controller/messageController');

//Create a Router
const indexRouter = Router();

/* //Declare Variables
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]; */

//First Route
indexRouter.get('/', messageGet);

indexRouter.get('/new', (req,res) => {
    res.render('form', {} );
});

indexRouter.post('/new', newMessagePOST);

//indexRouter.get('/testdb', messageGet);

//Export Module
module.exports = indexRouter;
