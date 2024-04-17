import bcrypt from "bcrypt";

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

async function comparePasswords(
  plaintextPassword: string,
  hashedPassword: string
): Promise<boolean> {
  const result = await bcrypt.compare(plaintextPassword, hashedPassword);
  return result;
}

export { hashPassword, comparePasswords };
