//unique number
var fs = require('fs');

var file = fs.readFileSync('unique-number.txt', 'utf-8');

var numbers = file.split(' ');
var count = numbers.shift();

var result = new Set();
numbers.forEach(el => result.add(Number(el)));

            console.log(`\nnumbers length --> ${numbers.length}
            result length --> ${result.size}\n`);

fs.writeFileSync('output.txt', result.size);