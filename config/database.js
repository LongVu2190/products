import dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;

dotenv.config();

const { DB_HOST, DB_USER, DB_PORT, DB_PASSWORD, DB_NAME, SSL_MODE } = process.env;

const pool = new Pool({
  host: DB_HOST,
  user: DB_USER,
  port: DB_PORT,
  password: DB_PASSWORD,
  database: DB_NAME,
  ssl: SSL_MODE === 'true',
});

export default pool;
