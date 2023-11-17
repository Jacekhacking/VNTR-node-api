import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config();

// USE THIS FOR RAILWAY CONNECTION
// const connectionString = process.env.CONNECTION_STRING;
// const pool = new Pool({ connectionString });

// USE THIS FOR LOCAL CONNECTION
const connectionString = {
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASS
}
const pool = new Pool(connectionString);

const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};

export { query };
