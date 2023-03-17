const file = require('fs');
const express = require('express');

const PORT = 8080;
const HOSTNAME = '127.0.0.1';
//const HOSTNAME = '192.168.31.137';
//const HOSTNAME = '192.168.43.160';
const app = express();

// GET, POST, DELETE, PUT, PATCH, OPTIONS, TRACE, CONNECT, HEAD
//
// CRUD - Create, Read, Update, Delete
// POST - Create
// GET - Read
// PUT - Update
// DELETE - Delete


app.route('/data')
	.get( (req, res) => {
		res.send(JSON.stringify(JSON.parse(file.readFileSync('database.json'))));
	})
	.put( (req, res) => {
		res.send('response to PUT method');
	})
	.post( (req, res) => {
		res.send('response to POST method');
	})
	.delete( (req, res) => {
		res.send('response to DELETE method');
	})

// run server
app.listen(PORT, HOSTNAME, () => {
	console.log('Express js server is up!');
});
