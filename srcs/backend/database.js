import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASS,
	database: process.env.DATABASE_NAME,
	}).promise()

async function getUsers() {
	const [rows] = await pool.query('SELECT * FROM ' + process.env.DATABASE_NAME + '.' + process.env.DB_TABLE );
	return rows;
}

async function getUserByWalletId(wallet_address) {
	const [rows] = await pool.query('SELECT * FROM users  WHERE wallet_address = ?', [wallet_address]);
	return rows[0];
}

async function createUser(wallet_address, first_name) {
	const [result] = await pool.query('INSERT INTO users (wallet_address, first_name) VALUES (?, ?)', [wallet_address, first_name]);
	return result;
}

// const res = await createUser("0x13243546543234654653544", "admin");

// const user = await getUserById(3);

// console.log(user);

export {getUsers, getUserByWalletId, createUser};