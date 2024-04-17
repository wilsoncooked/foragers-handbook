export const port = Number(process.env.PORT) || 3000;
export const env = process.env.NODE_ENV || "development";
export const JWT_SECRET = `${process.env.JWT_SECRET}` as string;
