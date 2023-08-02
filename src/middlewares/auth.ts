import Token from "../auth/Token";

import { Request, Response, NextFunction } from "express";

function auth(req: Request, res: Response, next: NextFunction) {
  if (!process.env.JWT_SECRET || !process.env.JWT_EXPIRES_IN) {
    return res.send("System not setup");
  }

  if (!req.headers.authorization) {
    return res.send("JWT not provided");
  }

  const token = new Token(process.env.JWT_SECRET, process.env.JWT_EXPIRES_IN);

  const token_verified = token.verify(req.headers.authorization);

  if (!token_verified) {
    return res.send("token deve ser valido");
  }

  next();
}

export default auth;
