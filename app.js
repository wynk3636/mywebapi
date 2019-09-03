const express = require('express');

const app = express();

var port = process.env.PORT || 8080;

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
