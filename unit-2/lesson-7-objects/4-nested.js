const sportsTeam = {
    name: 'wolfpack',
    sport: 'hockey',
    wins: 12,
    location: {
        city: 'Hartford',
        state: 'CT',
    },
    players: [
        { name: 'Bob', age: 25 },
        { name: 'Joe', age: 23 },
        { name: 'Zo', age: 26 },
    ],
};

const hartfordName = sportsTeam.location.city;
const bobName = sportsTeam.players[0].name;
const joeAge = sportsTeam.players[1].age;

// destructuring nested objects
const {
    location: { city },
    players: [bob, joe]
} = sportsTeam;