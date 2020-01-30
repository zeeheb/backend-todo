const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
// app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect('mongodb://127.0.0.1:27018/admin', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const Todo = require('./models/Todo');

app.post('/todo/add', (req, res) => {
  //   res.setHeader('Content-Type', 'Accept');
  console.log(req);
  console.log(req.body);
  const temp = JSON.parse(req.body);

  const newItem = new Todo({
    title: req.body.title,
    id: req.body.id,
    dateCreated: req.body.dateCreated
    // lastUpdated: temp.lastUpdated
  });

  newItem.save().then(item => res.send('Item salvo com sucesso'));
});

const port = 3001;

app.listen(port, () => console.log('Server running...'));
