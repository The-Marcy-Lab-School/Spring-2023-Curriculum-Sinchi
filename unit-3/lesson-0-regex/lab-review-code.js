/*
P: Given a str return true if str is a palindrome (same forwards and backwards) and false if not

A: 
- filter the given str to remove all alphanumeric chars
- lowercase the given str


- init thru str to check for alphanumeric

- newStr = split lowercase str -> reverse -> join 
- compare new str to given str
*/
const isRealPalindrome = (str) => {
    const filterStr = str.toLowerCase().replace(/\W/g, '')
    // console.log(filterStr)
    return filterStr === filterStr.split('').reverse().join('');


    /*
    const alphaNumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const lowerStr = str.toLowerCase();
    let filterStr = "";
  
    for (let i = 0; i < lowerStr.length; i++) {
      if (alphaNumeric.includes(lowerStr[i])) {
        filterStr += lowerStr[i]
      }
    // console.log(filterStr)
    }
    return filterStr === filterStr.split('').reverse().join('')
    */
};

// isRealPalindrome("race,car")

/*
P: We need to swap last letter & first letter of each word. If word length is less than 2 leave as is. No special chars always 1 word

A:
- separate each word of the sentence given
- check if word length is less than 2
  - leave it
- if it greater than 2
  - swap first and last word position
*/

// refactor the code using Higher Order Methods
const swap = (sentence) => {
    const words = sentence.split(' ');
    const results = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (word.length < 2) {
            results.push(word)
        } else {
            // results.push(word.slice(-1) + word.slice(1, -1) + word[0])
            results.push(word[word.length - 1] + word.substring(1, word.length - 1) + word[0])
        }
    }

    return results.join(' ')
};


