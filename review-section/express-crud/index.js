const express = require('express');

//initializing a server 
const app = express();

const PORT = 8080; 

app.use(express.json());

const tasks = [];

app.get('/', (req,res) => {
  res.send("Hello, this server is live").status(200);
})

//CRUD
// CREATE 
//{id: 1, content: "some content", completed: false};
app.post('/tasks', (req, res) => {
  console.log(req.body);
  try {
  // req.body.id, req.body.content, req.body.completed
    const {id, content, completed} = req.body;
    const currTask = {id, content,completed}
    tasks.push(currTask);
    res.send(currTask).status(200);
  } catch {
    res.sendStatus(404);
  }
})

//READ 
app.get('/tasks', (req, res) => {
  res.send(tasks).status(200);
})

//UPDATE 
app.patch('/tasks/:id', (req, res) => {
  const {id} = req.params;
  const {completed} = req.body;
  const found = tasks.find(task => Number(id) === task.id);
  found.completed = completed
  res.send(found).status(200);
})

//DELETE 
app.delete('/tasks/:id', (req, res) => {
  const {id} = req.params;
  const found = tasks.findIndex(task => Number(id) === task.id);
  tasks.splice(found, 1);
  res.send("successfully deleted")
})


app.listen(PORT, () => {
  console.log("Listening on PORT", PORT);
});