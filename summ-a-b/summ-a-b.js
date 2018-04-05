//summ-a-b
var fs = require('fs');

var summFile = fs.readFileSync('summ-a-b.txt', 'utf-8',function(error, data) {
    if (error) throw error;
    data;
});

var arrSumm = summFile.split(' ');

console.log(Number(arrSumm[0]) + Number(arrSumm[1]));

fs.writeFileSync('output.txt', Number(arrSumm[0]) + Number(arrSumm[1]));
