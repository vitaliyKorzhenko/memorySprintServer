// src/config/db.ts
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

//only for test DB! and vercel deploy!!
const DATABASE_URL= 'postgresql://postgres.drjlsmyxjxwazfvyglxm:vitaliy1703AA@aws-0-eu-central-1.pooler.supabase.com:6543/postgres';

dotenv.config(); 
const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,  
  },
});

export default pool;
