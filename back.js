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
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
		res.send(JSON.stringify(JSON.parse(fs.readFileSync('./database.json'))));
	})
	.put(jp, (req, res) => {
		let test = 12;
		try {
			const clubs = JSON.parse(fs.readFileSync('./database.json'));
			clubs.forEach( club => {
				test = req.body.newCaptain;
				if (club.name === req.body.name) {
					club.coach = req.body.newCoach;
					club.captain = req.body.newCaptain;
				}
			} );
			fs.writeFile(
				'./database.json',
				JSON.stringify(clubs, null, 2), (err) => err && res.send('Error has been occured while json stringify' + err)
			);
			res.send('successfully updated.');
		} catch(err) {
			res.send('Error has been occured: ' + err);
		}
	})
	.post(jp, (req, res) => {
		try {
			const clubs = JSON.parse(fs.readFileSync('./database.json'));
			//fs.writeFileSync('./database.json', JSON.stringify(req.body));
			clubs.push(req.body);
			fs.writeFile(
				'./database.json',
				JSON.stringify(clubs, null, 2), (err) => err && res.send('Error has been occured while json stringify' + err)
			);
			res.send('successfully created.');
		} catch (err) {
			res.send('Error has been occured: ' + err);
		}
	})
	.delete(jp, (req, res) => {
		try {
			const clubs = JSON.parse(fs.readFileSync('./database.json'));
			const changedClubs = clubs.filter( (el, index) => index !== req.body.index );
			fs.writeFile(
				'./database.json',
				JSON.stringify(changedClubs, null, 2), (err) => err && res.send('Error has been occured while json stringify' + err)
			);
			res.send('successfully deleted.');
		} catch (err) {
			res.send('Error has been occured: ' + err);
		}
	})

// run server
app.listen(PORT, HOSTNAME, () => {
	console.log('Express js server is up!');
});
