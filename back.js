const file = require('fs');
const express = require('express');

const PORT = 8080;
const HOSTNAME = '192.168.31.137';
const app = express();

// GET, POST, DELETE, PUT, PATCH, OPTIONS, TRACE, CONNECT, HEAD
//
// CRUD - Create, Read, Update, Delete
// POST - Create
// GET - Read
// PUT - Update
// DELETE - Delete

app.get('/data', (req, res) => {
	const person = file.readFileSync('./database.json');
	res.send(JSON.stringify(JSON.parse(person)));
});

app.post('/data', (req, res) => {
	const person = file.readFileSync('./database.json');
	res.send('response to POST method);
});

app.delete('/data', (req, res) => {
	const person = file.readFileSync('./database.json');
	res.send('response to DELETE method')));
});

app.put('/data', (req, res) => {
	const person = file.readFileSync('./database.json');
	res.send('response to PUT method'));
});

// run server
app.listen(PORT, HOSTNAME, () => {
	console.log('Express js server is up!');
});
