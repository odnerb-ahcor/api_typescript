import { User } from './User';
import { runQuery } from "../database/mysql";

async function findUser(username: string): Promise<User | null> {
  const data = await runQuery('SELECT * FROM user WHERE username = ?', [username]);

  if (data.length > 0) {
    return data[0];
  }
  
  return null;
}

async function findUsers(): Promise<User[]> {
  return await runQuery('SELECT idUser, username FROM user');
}

async function createUser(username: string, password: string): Promise<boolean> {
  await runQuery('INSERT INTO user (username, password) VALUES (?, ?)', [username, password]);

  return true;
}

export { findUser, findUsers, createUser };