# Express - HTML

## Files on Hand
- Public: 
  - Holds the files for the frontend
  - index.js 
  - index.html 
- src 
  - Holds the files for the backend
  - server.js

## Review
- Must require express to use it! 
- Invoke express to initialize a server. 
- Line of code to parse incoming requests to JSON! `app.use(express.json());`
- Code to listen for requests: 
```js
app.listen(port, host, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});
```
- Starter route: 
```js
app.get('/api/todos', (req, res) => {
  res.send(todos)
})
```

## Show that the Backend and Frontend are connected
- The server can host a front end using this code: 
```js
const path = require('path');
const publicDir = path.join(__dirname, '..', 'public');
const staticAssets = express.static(publicDir);
app.use(staticAssets);
```

## Make a fetch call 
- Now when I make a fetch call to a route from the front end, I can see it console.logged from the backend. 

## Make a POST request using a form 
- to make a fetch request 
- need a url 
- need an options object with 
  - method 
  - headers
  - body: JSON.stringify(data);