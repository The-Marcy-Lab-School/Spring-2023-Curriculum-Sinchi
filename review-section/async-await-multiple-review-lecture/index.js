console.log('hi!');

const fetcherV1 = (url, opts) => {
  console.log(`Fetching ${url}...`);
  return fetch(url, opts)
    .then(response => response.json())
    .then(data => {
      console.log(`Fetch Complete, retrieved: ${data}:`, );
      return data
    })
    .catch(err => {
      console.error('Fetch error:', err)
    });
}

const fetcherV2 = async (url, opts) => {
  try {
    console.log(`Fetching ${url}...`);
    const response = await fetch(url, opts);
    if (!response.ok) throw new Error('Fetch missed!')
    return response.json();
  } catch (error) {
    console.log(error)
    console.log('all good:');
  }
}

fetcherV2('https://pokeapi.co/api/v2/pokemon/ditsdasdasdato')

const thing = () => 10;
console.log(thing())















