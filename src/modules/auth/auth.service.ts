import bcrypt from "bcryptjs";
import { pool } from "../../database/db";
import jwt from "jsonwebtoken";

const loginUser = async (email: string, password: string) => {
	const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
    const user = result.rows[0];
    // console.log('auth service User : ---', result);
    // console.log('--------------------', result.rows[0]);


	if(result.rowCount === 0) {
		throw new Error("User not found!");
	}

	const matchedPassword = await bcrypt.compare(password, result.rows[0].password);

	if (!matchedPassword) {
		throw new Error("Invalid credentials");
	}

	const jwtPayload = {
		id:user.id,
		name: user.name,
		email: user.email
	}
	const secret ="KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"
	const token = jwt.sign (jwtPayload,secret,{expiresIn: "7d"});


	return {result, token}; 
};

export const authService = {
	loginUser,
};
