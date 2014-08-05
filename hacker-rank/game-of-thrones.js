'use strict';

function processInput() {
    var str = input.split("\n")[0];
    var last = false, joker = true;
    var result = str.split('').sort().every(function(c) {
        if (!last) last = c;
        else if (last && last === c) last = false;
        else if (joker && last) { joker = false;
                                  last = c;   }
        else return false; 
        return true;
    }) && (!last || joker) ? 'YES': "NO";
    console.log(result);
} 

// var input = "aazzzzaabbccxxyyzzbbbbqr";
// processInput();
// var input = "aab";
// processInput();

var input = "";
process.stdin.resume();
process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {input += data;});
process.stdin.on('end', processInput);
 
