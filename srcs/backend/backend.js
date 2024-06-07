// server.js
import express from 'express';
import dotenv from 'dotenv';

import {
	getUsers
	,getUserByWalletId
	,createUser} from './database.js';

const app = express();
const PORT = process.env.PORT || 5000; // Choose any available port

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something broke!\n');
});

// Define routes
app.get('/', (req, res) => {
	res.send(process.env.DB_HOST);
});

app.get('/users', async(req, res) => {
	const users = await getUsers();
    res.send(users);
});

app.get('/user/:wallet_address', async(req, res) => {
	const wallet_address = req.params.wallet_address;
	const user = await getUserByWalletId(wallet_address);
	if (!user) {
		return res.status(200).json({ error: 'NoUser' });
	}
    res.send(user);
});

// Place these lines before any route handlers.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// creating user
app.post('/user', async(req, res) => {
	console.log("***********************")
	console.log(req.body);
	console.log("***********************")
	const wallet_address = req.body.wallet_address;
	const first_name = req.body.first_name;
	const user = await createUser(wallet_address, first_name);
	res.send(user);
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}\n`);
});

