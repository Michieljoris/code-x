'use strict';

var parseNumber = function (s) { return parseInt(s, 10); };

function processInput() {
    var lines = input.split("\n");
    var T = parseNumber(lines[0]);
    lines = lines.slice(1,T+1);
    lines.map(parseNumber).forEach(function(c) {
       console.log(Math.floor(c/2 * c/2));
    });
} 

var fs = require('fs-extra');
var input = fs.readFileSync(__filename.slice(0,__filename.length-3) + '.txt',
                            { encoding: 'utf8'});
console.log(input);
processInput();

// var input = "";
// process.stdin.resume();
// process.stdin.setEncoding('ascii');
// process.stdin.on('data', function (data) {input += data;});
// process.stdin.on('end', processInput);
 
