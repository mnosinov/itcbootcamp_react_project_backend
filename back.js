const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const jp = bodyParser.json();

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
		res.send(JSON.stringify(JSON.parse(fs.readFileSync('./database.json'))));
	})
	.put( (req, res) => {
		res.send('response to PUT method');
	})
	.post(jp, (req, res) => {
		try {
			//fs.writeFileSync('./database.json', JSON.stringify(req.body));
			fs.appendFile('./database.json', JSON.stringify(req.body), (err) => err && console.error(err));
		} catch (err) {
			res.send('Error has been occured: ' + err);
		}
		res.send('Successfully added data.');
	})
	.delete( (req, res) => {
		res.send('response to DELETE method');
	})

// run server
app.listen(PORT, HOSTNAME, () => {
	console.log('Express js server is up!');
});
