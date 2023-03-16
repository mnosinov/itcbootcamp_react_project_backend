const http = require('http'); //node js is in ES5, that is why there is no async await or import. Thise line is equal to import expression in react
const url = require('url');
const file = require('fs');

http.createServer( (request, response) => {
	const path = url.parse(request.url);
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Methods', 'GET,POST');

	if (path.pathname === '/person' && request.method === 'GET') {
		const person = file.readFileSync('./database.json');
		response.end(JSON.stringify(JSON.parse(person)));
		return;
	}
	response.end( `404: Not Found URL`);
}).listen(8080, '192.168.31.137', () => {
	console.log('Server is up!');
});
