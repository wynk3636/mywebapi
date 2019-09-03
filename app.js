const express = require('express');

const app = express();

var port = process.env.PORT || 8080;

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/',(req,res) => res.send('Hellow'));

app.get('/api',(req,res) => {
	const todoList = [
		{title:'aaa',done:true},
		{title:'bbb',done:false},
		{title:'ccc',done:false}
	]
	res.json(todoList);
});

app.listen(
	port, () => console.log('port use')
);
