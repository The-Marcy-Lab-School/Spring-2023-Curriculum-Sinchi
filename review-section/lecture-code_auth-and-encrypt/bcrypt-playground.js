const bcrypt = require('bcrypt');

// REMEMBER THE FOCUS POINTS:
// bcrypt.hash(password, saltRounds)
// bcrypt.compare(stringToTest, hash)

const main = async () => {

  const password = 'abc'
  const exampleSalt = await bcrypt.genSalt(10) // a cool function, but we don't NEED it!
  const exampleHash = await bcrypt.hash(password, exampleSalt)

  console.log('Example Salt: ', exampleSalt)
  console.log('Example Hash: ', exampleHash)

  const hash = await bcrypt.hash(password, 10)
  const hash2 = await bcrypt.hash(password, 10)
  const hash3 = await bcrypt.hash(password, 10)
  console.log('hash:', hash);
  console.log('hash2:', hash2);
  console.log('hash3:', hash3);

  const match = await bcrypt.compare(password, hash)
  const match2 = await bcrypt.compare(password, hash2)
  const match3 = await bcrypt.compare(password, hash3)
  console.log('match:', match);
  console.log('match2:', match2);
  console.log('match3:', match3);
}

main();