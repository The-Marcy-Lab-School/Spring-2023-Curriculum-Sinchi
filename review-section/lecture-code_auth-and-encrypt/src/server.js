const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')

app.use(express.json());
app.use(cookieParser())


const makeId = ((id = 1) => () => id++)()

// password is abc hashed
const users = [
  { id: makeId(), name: 'zo', password: '$2b$10$9AGJlfO.hsunGgJ.vAwy0.In9CdV4C7fpVVjVTwZLbuznN9bE4/Zi' },
  { id: makeId(), name: 'maya', password: '$2b$10$9AGJlfO.hsunGgJ.vAwy0.In9CdV4C7fpVVjVTwZLbuznN9bE4/Zi' },
]

const publicDir = path.join(__dirname, '..', 'public');
const staticAssets = express.static(publicDir);
app.use(staticAssets);

// HERE'S THE CREATE USER ROUTE
// We did this together, do you undestand it?
app.post('/users', async (req, res) => {
  // Get body, hash password, save vales

  const { name, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = { id: makeId(), name, password: hashedPassword }
  users.push(user)

  res.cookie('userId', user.id, { maxAge: 1000 * 60 * 60 * 24 * 7 })

  res.status(201).send(user)
});

// The login route logic is almost exactly the same,
// the cookies are still good, but now YOU have to figure out
// How to use bcrypt to compare the password from the request body to the saved hash
app.post('/login', (req, res) => {
  const { name, password } = req.body;

  const user = users.find(user => user.name === name && user.password === password)

  if (user) {
    res.cookie('userId', user.id, { maxAge: 1000 * 5 })
    res.send({ user })
  } else {
    res.status(401).send({ message: 'User not found' })
  }
})

// And look, these two work exactly the same as before!
// Encrypting the password doesn't change how we use the cookies
app.get('/me', (req, res) => {
  const user = users.find(user => user.id === Number(req.cookies.userId))

  user
    ? res.send({ user })
    : res.status(404).send({ message: 'User not found' })
})

app.get('/logout', (req, res) => {
  res.clearCookie('userId')
  res.sendStatus(204)
});

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Up! http://localhost:${port}`));
