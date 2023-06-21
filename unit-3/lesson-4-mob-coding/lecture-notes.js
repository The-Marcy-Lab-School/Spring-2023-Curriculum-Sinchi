const freqChar = (str) => {

    return str.split('').reduce((counter, char) => {
        counter[char] = (counter[char] || 0) + 1
        return counter
    }, {})
};


console.log(freqChar('sinchi'));
console.log(freqChar('abracadabra'));
console.log(freqChar('hello'));
console.log(freqChar('Alright, Ana in here?'));
console.log(freqChar('#$%#$WGDEgd2#'));

/*
- params of nums
- init a new arr fill it with n amount of times (with a valuie)
- pass by from 1 to n amount of times to toggle switch
- have a value that increases the amount of times we walk past lights
    - we walk past lights to the exact nums of switches
    -iterate through switches through roiuns
        -I is icrementor for the second iteration
        - we negate the value of the curr el (false => true || ture => false)
- add all true values and grab index + 1 into a new array
*/
const lightsOn = (switches) => {
    /*
    const lights = new Array(switches).fill(false);
    // console.log(lights);

    for (let rounds = 1; rounds <= lights.length; rounds++) {
        for (let toggle = rounds - 1; toggle < lights.length; toggle += rounds) {
            lights[toggle] = !lights[toggle]
        }
    }

    // console.log('after iteration: ', lights)

    const results = lights.reduce((acc, curr, idx) => {
        if (curr) acc.push(idx + 1);
        return acc
    }, [])

    return results
    */

    const results = [];

    for (let i = 1; i <= Math.sqrt(switches); i++) {
        if (i ** 2 > switches) break;
        results.push(i ** 2)
    }
    return results
};

console.log(lightsOn(2));
console.log(lightsOn(5));
console.log(lightsOn(10));
console.log(lightsOn(100));