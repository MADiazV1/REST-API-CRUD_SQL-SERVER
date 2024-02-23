import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_database = process.env.DB_DATABASE;

const dbSettings = {
    user: db_user,
    password: db_password,
    server: db_host,
    database: db_database,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
}

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }
};