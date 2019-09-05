const express = require('express');
const multer = require('multer');
const uuidv4 = require('uuid/v4');

const app = express();
app.use(multer().none());

var port = process.env.PORT || 8080;
const todoList = [];

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/',(req,res) => res.send('Hellow'));

app.get('/api/get',(req,res) => {
	/*
	todoList = [
		{title:'aaa',done:true},
		{title:'bbb',done:false},
		{title:'ccc',done:false}
	]
	*/
	res.json(todoList);
});

app.post('/api/post',(req,res) => {
	const todoData = req.body;
	const todoTitle = todoData.title;

	const id = uuidv4();

	const todoItem = {
		id,
		title:todoTitle,
		done:false
	};

	todoList.push(todoItem);

	console.log(JSON.stringify(todoItem));

	res.json(todoItem);
});

app.delete('/api/delete/:id',(req,res) => {
	const index = todoList.findIndex((item) => item.id === req.params.id);

	if(index >= 0){
		const deleted = todoList.splice(index,1);
		console.log(JSON.stringify(deleted[0]));
	}

	res.sendStatus(200);
})

app.listen(
	port, () => console.log('port use')
);
