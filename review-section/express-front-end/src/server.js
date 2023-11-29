const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 8080;

//navigating to HTML file or static folder
const publicDir = path.join(__dirname, '..', 'public');
// here we are rendering the Static file 
const staticAssets = express.static(publicDir);
// Here we are using the static file with every request
app.use(staticAssets);

const todos = [
  { content: 'go to store', isDone: false },
]

app.get('/api/todos', (req, res) => {
  res.send(todos)
})

app.post('/api/todos', (req, res) => {
  // console.log(req.body);
  todos.push(req.body)
  res.send(req.body)
})


app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});