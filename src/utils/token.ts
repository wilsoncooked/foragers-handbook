import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

const EXPIRES_IN = "24h";

const generateToken = (userId: number): string =>
  jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: EXPIRES_IN,
  });

const verifyToken = (token: string): string | jwt.JwtPayload =>
  jwt.verify(token, JWT_SECRET);

export { generateToken, verifyToken };
