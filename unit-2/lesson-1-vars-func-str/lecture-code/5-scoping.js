// friend is highest "global scope"
const friend = 'John';

// function greetFriend is global too
const greetFriend = (myName) => {
    // inside greetFriend, now 1 scope down
    console.log(`Hi, ${friend}, I'm ${myName}`);
}

greetFriend('Jane'); // Hi, John, I'm Jane

// can't see into scopes
const secretValues = () => {
    const private = 'shhhhh!';
    return private;
}

console.log(private) // ERROR 'private is not defined'
console.log(secretValues()) // 'shhhhh!'
