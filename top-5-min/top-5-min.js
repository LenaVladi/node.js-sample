//top 5 min
var fs = require('fs');

var file = fs.readFileSync('top-5-min.txt', 'utf-8');

var beep = file.split(' ');
var sign = beep.shift();
sign = Number(sign);
var massMinBeep = [];

var count = 0;
for (var i = 0; i < sign; i++) {
    var num = beep.shift();
    massMinBeep.push(Number(num)); 
    massMinBeep.sort(function(a,b){return a-b;}).reverse();

            console.log(massMinBeep.slice(0, 5).join(' '));

    fs.appendFileSync('output.txt', `${massMinBeep.slice(0, 5).join(' ')}\n`);
    count++;
}