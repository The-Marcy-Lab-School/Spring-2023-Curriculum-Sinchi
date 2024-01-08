const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());

const distDir = path.join(__dirname, '..', 'dist');
const staticAssets = express.static(distDir);
app.use(staticAssets);

const todos = [
  { content: 'go to store', isDone: false },
  { content: 'do homework', isDone: false },
]

app.get('/api/todos', (req, res) => {
  res.send(todos)
})

// after you add all your routes make sure to add this
// so that your frontend React router works and you still get the right 404s (both API and client routes)
app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) return next();
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Up! http://localhost:${port}`));


























