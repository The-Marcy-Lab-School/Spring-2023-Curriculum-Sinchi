const apiUrl = 'https://64dbf150593f57e435b18c89.mockapi.io/PracticeAPI';
const imageGallery = document.getElementById('image-gallery');

// Display All Users - set
// Create a method to create a new user
// a method to update a user
// a method to delete user

//POST
const createUser = (newUser) => {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(response => {
            // console.log(response)
            return response.json()
        })
        .then(data => {
            console.log('New user create:', data)
            return data
        })
        .catch(error => {
            console.error("Error:", error)
        })
}

const newUser = {
    userName: 'dcobos',
    name: 'david',
    profilePic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fpets%2Fa43276342%2Fcat-instagram-captions%2F&psig=AOvVaw1x5bXb0dzsra0Anr4T_LQi&ust=1692288937022000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCKCGnNnJ4YADFQAAAAAdAAAAABAE'
}

createUser(newUser);

// PUT
const updateUser = (id, updatedData) => {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
        .then(response => {
            // console.log(response)
            return response.json()
        })
        .then(data => {
            console.log('User updated:', data)
            return data
        })
        .catch(error => {
            console.error("Error:", error)
        })
}

const updateJowel = {
    userName: 'jorwell'
}

updateUser(12, updateJowel)

// DELETE

const deleteUser = (id) => {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                console.log(`User is deleted`)
            } else {
                console.error("Error: ", response.statusText)
            }
        })
}


// GET 
const displayUsers = () => {
    fetch(apiUrl)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => {
            console.log(data)

            data.forEach(user => {
                const imageElement = document.createElement('img')
                const nameElement = document.createElement('h3');

                imageElement.src = user.profilePic;
                imageElement.alt = user.name;

                nameElement.textContent = user.userName;

                imageGallery.append(imageElement);
                imageGallery.append(nameElement);
            })
        })
}

displayUsers()



