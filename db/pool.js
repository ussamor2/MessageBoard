//Import poolling from pg
const { Pool } = require('pg');

const connectionString = process.env.LOCAL_DB_CONN_STRING;
if (connectionString === undefined){
    console.log("null");
    }else{
        console.log(connectionString);     
};

module.exports = new Pool({
    connectionString
});