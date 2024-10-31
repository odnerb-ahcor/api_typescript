import { Request, Response } from "express";

const dados = [
  {
    "nome": "Brendo",
    "idade": "26"
  },
  {
    "nome": "Bruno",
    "idade": "24"
  },
  {
    "nome": "Juliana",
    "idade": "27"
  },
]

export default function listarClientes(req: Request, res: Response) {
  const { username, password } = req.body;
  if (username !== "brendo" || password !== "teste123") {
    res.json('{"message": "error"}');
  }

  res.json(dados);
}