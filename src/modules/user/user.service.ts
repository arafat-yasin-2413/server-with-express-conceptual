import bcrypt from "bcryptjs";
import { pool } from "../../database/db";

const createUser = async (payload: Record<string, unknown>) => {
  const { name, email, password, role } = payload;

  const hashedPassword = await bcrypt.hash(password as string, 12);

  const result = await pool.query(
    `INSERT INTO users(name, email, password, role) VALUES($1, $2, $3, $4) RETURNING id, name, email, role, age, created_at, updated_at`,
    [name, email, hashedPassword, role]
  );

  // console.log("Result : ---", result);
  // delete result.rows[0].password;

  return result;
};

const getAllUser = async () => {
  const result = await pool.query(
    `SELECT id,name, email, created_at, updated_at FROM users`
  );
  return result;
};

const getSingleUser = async (email: string) => {
  const result = await pool.query(
    `SELECT id,name, email, created_at, updated_at FROM users WHERE email=$1`,
    [email]
  );
  return result;
};

export const userServices = {
  createUser,
  getAllUser,
  getSingleUser,
};
