const express = require('express');
const morgan = require('morgan');

const app = express();

// add your code here
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
    // console.log(req.params.number);
});

app.post('/api/TodoItems', (req, res) => {
    // res.send(req.body);
    res = {
        todoItemId: number,
        name: string,
        priority: number,
        completed: boolean
    };
    res.end();
});

// app.post('/api/TodoItems', (req, res) => {
//     res.status(201).send({
//         todoItemId: number,
//         name: string,
//         priority: number,
//         completed: boolean
//     });
//     res.send(req.body);
//     console.log(req.body);
// });

app.delete('/api/TodoItems/:number', (req, res) => {
    res.send(data[req.params.number] + " will be deleted!");
    res.status(200).delete(data[req.params.number]);
});

module.exports = app;
