const apiUrl = "https://jsonplaceholder.typicode.com/users";

const newUser = {
    name: "Jowel",
    email: "jowel@marcy"
}

fetch(apiUrl, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
})
    .then(response => response.json())
    .then(data => {
        console.log("New user created:", data)
    })
    .catch(error => {
        console.error("Error:", error)
    })
