//Import queries
const db = require('../db/queries'); 

async function messageGet (req, res) {
    const messages = await db.getDatafromTable();
    //console.log(messages);
    res.render('index', { title: 'Mini Messageboard', messages: messages });
}

async function newMessagePOST (req, res) {
    //Payload delivered inside req.body.{html tag 'name'}
    const { aMessage, aName } = req.body
    await db.loadDatatoTable( aMessage, aName );
    res.redirect('/');
}

module.exports = {
    messageGet,
    newMessagePOST
};
