let fs = require('fs');

// console.log(fs)

fs.writeFile('poem.txt', 'Beautiful Day', function(error, result) { 
    if (error) {
        console.log(error);
    } else {
        console.log('The write was successful.');
    }
 });

console.log('This is line 13');

