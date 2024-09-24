import mysql from "mysql2/promise";
import { BadRequestError } from "../helpers/api-erros";

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,      
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_NAME
    });
    return connection;
  } catch (error) {
    throw new BadRequestError('Erro connect database', error);
  }
}

export async function runQuery(sql: string, values?: any): Promise<any[]> {
  const connection = await connectToDatabase();

  try {
    const [rows] = await connection.execute(sql, values);
    
    return rows as any[];
  } catch (error) {
    throw new BadRequestError('Erro sql', error);
  } finally {
    await connection.end();
  }
}