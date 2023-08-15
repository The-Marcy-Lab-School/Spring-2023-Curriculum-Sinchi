const apiUrl = 'https://cat-fact.herokuapp.com/facts';
const kittenContainer = document.getElementById('kitten-container');

console.log(kittenContainer)

fetch(apiUrl)
    .then((response) => {
        console.log(response);
        return response.json()
    })
    .then(data => {
        console.log(data);
        // console.log("cat fact #1", data[0].text);

        let catFact = data[0].text;

        // kittenContainer.textContent = catFact;

        const randomIdx = Math.floor(Math.random() * data.length);
        const randomFact = data[randomIdx].text;

        console.log(randomFact)

        kittenContainer.textContent = randomFact;

        // HTTP Verbs
        // Get -> Read
        // Post -> create
        // Put -> Update
        // Delete -> Delete

    })
    .catch(error => {
        console.error('Error:', error)
    })


