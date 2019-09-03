const express = require('express');

const app = express();

app.get('/',(req,res) => res.send('Hellow'));

app.get('/api',(req,res) => {
	const todoList = [
		{title:'aaa',done:true},
		{title:'bbb',done:false}
	]
	res.json(todoList);
});

app.listen(3000, () => console.log('port 3000 use'));
