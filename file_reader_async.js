let fs = require('fs');

let first_part_of_the_poem = fs.readFileSync('poem.txt');

console.log(first_part_of_the_poem + ', violets are blue');