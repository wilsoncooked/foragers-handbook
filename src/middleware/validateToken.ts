import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/token";

async function validateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({
      error: true,
      message: "Access token is missing",
    });
  }

  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  verifyToken(token);

  next();
}
