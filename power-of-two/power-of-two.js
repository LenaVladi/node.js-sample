//power of two
var fs = require('fs');

var file = fs.readFileSync('power-of-two.txt', 'utf-8');

var power = Math.floor(Math.log(file)/Math.log(2));

fs.writeFileSync('output.txt', power);


                    console.log(power);

// function power(num) {
//     num = Number(num);
//     console.log(num);
//     for (var x = 0, a = 1; (a*=2) < num; x++);
//        return x;
// }