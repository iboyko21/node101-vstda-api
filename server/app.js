const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

const data = [
	{
		todoItemId: 0,
		name: 'an item',
		priority: 3,
		completed: false
	},
	{
		todoItemId: 1,
		name: 'another item',
		priority: 2,
		completed: false
	},
	{
		todoItemId: 2,
		name: 'a done item',
		priority: 1,
		completed: true
	}
];

app.get('/', (req, res) => {
    res.status(200).send({status: 'ok'});
});

app.get('/api/TodoItems', (req, res) => {
    res.status(200).send(data);
});

app.get('/api/TodoItems/:number', (req, res) => {
    res.status(200).send(data[req.params.number]);
    console.log(data[req.params.number]);
});

app.post('/api/TodoItems', (req, res) => {
    res.status(201).send(req.body);
    let index = data.findIndex(e => e.todoItemId === req.body.todoItemId);
    index == -1 ? data.push(req.body) : data[index] = req.body;
    for(i=0; i<data.length; i++){
        data[i].todoItemId = i;
    };
    res.end();
});

app.delete('/api/TodoItems/:number', (req, res) => {
    res.status(200).send(data[req.params.number]);
    data.splice(req.params.number, 1);
    for(i=0; i<data.length; i++){
        data[i].todoItemId = i;
    };
});

module.exports = app;