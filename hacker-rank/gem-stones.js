'use strict';

var parseNumber = function (s) { return parseInt(s, 10); };

function processInput() {
    var lines = input.split("\n");
    var T = parseNumber(lines[0]);
    lines = lines.slice(1,T+1);
    console.log(lines.map(function(l) { return l.split('');})
                .reduce(function(p,n) {
                    var carried = [];
                    return n.filter(function(c) {
                        var carry = p.indexOf(c) !== -1 && !carried[c];
                        carried[c] = true;
                        return carry;
                    });
                }).length);
} 

// var fs = require('fs-extra');
// var input = fs.readFileSync('./gem-stones.txt', { encoding: 'utf8'});
// console.log(input);
// processInput();

var input = "";
process.stdin.resume();
process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {input += data;});
process.stdin.on('end', processInput);
