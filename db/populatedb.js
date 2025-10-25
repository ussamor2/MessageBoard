#! /usr/bin/env node

const { Client } = require("pg");

const connectionString = process.env.LOCAL_DB_CONN_STRING;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 500 ),
  date TIMESTAMPTZ DEFAULT NOW()
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
