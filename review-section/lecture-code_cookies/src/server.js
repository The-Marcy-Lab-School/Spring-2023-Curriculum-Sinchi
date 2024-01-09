const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(cookieParser())

const users = [
  { id: 1, name: 'zo', password: 'abc' },
  { id: 2, name: 'maya', password: 'abc' },
]

const publicDir = path.join(__dirname, '..', 'public');
const staticAssets = express.static(publicDir);
app.use(staticAssets);

let count = 0;

app.get('/count', function (req, res) {
  // Read any existing cookies (remember, each cookie is a name/value pair, hence an object)
  console.log(req.cookies);

  let count = (Number(req.cookies.count) + 1) || 1;

  res.cookie('count', count)

  // The client can't read the cookie, but that's ok! Let's just send back the data like we always do
  res.send({ count });
})

app.delete('/count', (req, res) => {
  // Deleting the cookie is means is how we reset the count
  res.clearCookie('count')
  // Remember though, users can delete the cookies themselves, so we should always be prepared for that

  res.send({ count: 0 })
})

app.post('/login', (req, res) => {
  const { name, password } = req.body;

  // this is standing in for checking the database and using a real password hash
  const user = users.find(user => user.name === name && user.password === password)

  if (user) {
    // in this example we are setting a cookie with the user id
    // and a maxAge of 10 seconds, which means the cookie will delete itself in 10 seconds
    // This is just for show, you for sure would want a longer lifespan in a real app
    res.cookie('userId', user.id, { maxAge: 1000 * 5 })
    // We're only saving the data we need to the cookie, which is the user id
    // because if we have that, we can always just look up the user in the DB

    res.send({ user })
  } else {
    res.status(401).send({ message: 'User not found' })
  }
})

// This is just showing us the current user by reading the cookie!
app.get('/me', (req, res) => {
  const user = users.find(user => user.id === Number(req.cookies.userId))

  user
    ? res.send({ user })
    : res.status(404).send({ message: 'User not found' })
})

// If we know we're logged in by the existence of the cookie, then logging out
// is as simple as deleting it!
app.get('/logout', (req, res) => {
  res.clearCookie('userId')
  res.sendStatus(204)
});

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Up! http://localhost:${port}`));
