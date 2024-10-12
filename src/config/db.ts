// src/config/db.ts
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config(); 
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,  
  },
});

export default pool;
