import bcrypt from "bcryptjs";
import { pool } from "../../database/db";

const createUser = async (payload: Record<string, unknown>) => {
	const { name, email, password } = payload;

    const hashedPassword = await bcrypt.hash(password as string, 12);

	const result = await pool.query(
		`
            INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING id, name, email, age, created_at, updated_at 
        `,
		[name, email, hashedPassword]
	);

    // console.log("Result : ---", result);
    // delete result.rows[0].password;

	return result;
};

export const userServices = {
	createUser,
};


