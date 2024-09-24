import { Request, Response } from "express"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { findUser, findUsers, createUser } from "./userRepository";
import { BadRequestError } from "../helpers/api-erros";
import { UserSherma } from "./User";

export async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  
  const data = await findUser(username);
  
  if (!data) {
    throw new BadRequestError('E-mail ou senha inválidos');
  }

  const verifyPass = await bcrypt.compare(password, data.password);

  if (!verifyPass) {
    throw new BadRequestError('E-mail ou senha inválidos');
  }

  const secretKey = process.env.SECRET_JWT as string;
  const token = jwt.sign({ id: data.idUser, username: data.username }, secretKey, {expiresIn: '1h'});
  res.json({ token });
}

export async function listUsers(req: Request, res: Response) {
  const data = await findUsers();

  res.json(data);
}

export async function signUp(req: Request, res: Response) {
  const data = UserSherma.safeParse(req.body);

  if (!data.success) {
    throw new BadRequestError('Invalid data', data.error.errors);
  }

  const user = await findUser(data.data.username);

  if (user) {
    throw new BadRequestError('Já existe um usuario com esse username');
  }
  
  const hashPassword = await bcrypt.hash(data.data.password, 10);
  
  await createUser(data.data.username, hashPassword);

  res.json({ message: 'Success' });
}