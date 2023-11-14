import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config();

const connectionString = process.env.CONNECTION_STRING;

const pool = new Pool({ connectionString });

const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};

export { query };
