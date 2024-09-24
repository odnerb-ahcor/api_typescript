import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { UnauthorizedError } from '../helpers/api-erros';

const JWT_SECRET = process.env.SECRET_JWT as string;

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new UnauthorizedError('Token not provided');
  }

  const [scheme, token] = authHeader.split(' ');

  if (scheme !== 'Bearer') {
    throw new UnauthorizedError('Invalid token format');
  }

  try {
    const decoded = verify(token, JWT_SECRET);

    res.locals.user = decoded;
    next();
  } catch (err) {
    throw new UnauthorizedError('Token invalid or expired');
  }
};
