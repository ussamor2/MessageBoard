//Require Router out of express.router
const { Router } = require('express');

//Create a Router
const indexRouter = Router();

//Declare Variables
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
];

//First Route
indexRouter.get('/', (req,res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
});

indexRouter.get('/new', (req,res) => {
    res.render('form', {} );
});

indexRouter.post('/new', (req,res) => {
    //Payload delivered inside req.body.{html tag 'name'}
    const { aMessage, aName } = req.body
    //console.log(aMessage, aName);
    messages.push( { text: aMessage, user: aName, added: new Date() });
    res.redirect('/');
});

//Export Module
module.exports = indexRouter;
