const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect('mongodb://127.0.0.1:27021/admin', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const Todo = require('./models/Todo');

app.post('/todo', (req, res) => {
  //   res.setHeader('Content-Type', 'Accept');
  console.log(req);
  console.log(req.body);
  // const temp = JSON.parse(req.body);

  const newItem = new Todo({
    title: req.body.title,
    id: req.body.id,
    // dateCreated: req.body.dateCreated,
    completed: req.body.completed
    // lastUpdated: temp.lastUpdated
  });

  newItem.save().then(item => res.send('Item salvo com sucesso'));
});

app.get('/todo', async (req, res) => {
  // Todo.find({}, (todos) => {
  //   res.send(todos)
  // })
  const todos = await Todo.find({});
  res.send(todos);
});

app.delete('/todo', async (req, res) => {
  const params = req.query;

  // const todo = await Todo.find({id: params})
  await Todo.findOneAndRemove({ id: params.id });
  res.send('Apagado com sucesso');
});

const port = 3001;

app.listen(port, () => console.log('Server running...'));
