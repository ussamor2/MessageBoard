//Import pool.js
const pool = require('./pool');

async function getDatafromTable() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;    
}

async function loadDatatoTable( textMessage, username ){
    await pool.query('INSERT INTO messages (username, text) VALUES ($1, $2)', [username, textMessage]);
}

module.exports = {
    getDatafromTable,
    loadDatatoTable
}
