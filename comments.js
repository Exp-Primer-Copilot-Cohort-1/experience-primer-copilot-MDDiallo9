// Create web server using Express
// Create a route to handle POST requests to /comments
// Create a route to handle GET requests to /comments
// Create a route to handle GET requests to /comments/:id
// Create a route to handle DELETE requests to /comments/:id
// Create a route to handle PUT requests to /comments/:id
// Create a route to handle PATCH requests to /comments/:id

const express = require('express');
const app = express();
app.use(express.json());

let comments = [
  {
    id: 1,
    body: 'This is the first comment!',
    postId: 1,
  },
  {
    id: 2,
    body: 'This is the second comment!',
    postId: 1,
  },
  {
    id: 3,
    body: 'This is the third comment!',
    postId: 2,
  },
  {
    id: 4,
    body: 'This is the fourth comment!',
    postId: 2,
  },
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.get('/comments/:id', (req, res) => {
  const comment = comments.find((c) => c.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).json({ message: 'Comment not found' });
  } else {
    res.json(comment);
  }
});

app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    body: req.body.body,
    postId: req.body.postId,
  };
  comments.push(comment);
  res.status(201).json(comment);
});

app.put('/comments/:id', (req, res) => {
  const comment = comments.find((c) => c.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).json({ message: 'Comment not found' });
  } else {
    comment.body = req.body.body;
    comment.postId = req.body.postId;
    res.json(comment);
  }
});

app.patch('/comments/:id', (req, res) => {
  const comment = comments.find((c) => c.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).json({ message: 'Comment not found' });
  } else {
    if (req.body




