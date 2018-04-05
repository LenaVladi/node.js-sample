//fix summ
var fs = require('fs');

var file = fs.readFileSync('fix-summ.txt', 'utf-8');

var arr = file.split(' ');
var s = arr[0];
var s1 = [arr[1], arr[2]];
var s2 = [arr[3], arr[4]];

            console.log(`--> s = ${s}, s1 = [${s1}], s2 = [${s2}]`);

function summ(s, s1, s2) {
    s = Number(s);
    let result = [];
    for (var i = 0; i < s1.length; i++) {
        for (var j = 0; j < s1.length; j++) {
            if ((Number(s1[i]) + Number(s2[j])) === s) {
                result.push(s1[i], s2[j]);
            } 
        }
    }
    
    if (result.length > 2) {
        for (var n = 0; n < result.length; n+2) {
            let min = Number(result[n]);
            if (min > Number(result[n])) {
                result.splice(result[n], 2);
            }
        }
    }
    
    if (result.length > 0) return result;
    else return -1;
}

var answer = summ(s, s1, s2);

            console.log(`result --> ${answer.join(' ')}`);

fs.writeFileSync('output.txt', answer.join(' '));







