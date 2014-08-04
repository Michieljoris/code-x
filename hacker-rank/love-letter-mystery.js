'use strict';

var parseNumber = function (s) { return parseInt(s, 10); };

//how to get charcode of letter?
var abc = 'abcdefghijklmnopqrstuvwxyz';
function code(c) { return abc.indexOf(c); }
function steps(c1, c2) { return Math.abs(code(c1) - code(c2)); }

function palindromize(s) {
    return s.split('').slice(0, s.length/2).reduce(function(p,n,i) {
        return p + steps(n, s[s.length-i-1]);
    },0);
}

function processInput() {
    var lines = input.split("\n");
    var T = parseNumber(lines[0]);
    lines = lines.slice(1,T+1);
    console.log(lines.map(palindromize).join('\n'));
}

var fs = require('fs-extra');
var input = fs.readFileSync('./love-letter-mystery.txt', { encoding: 'utf8'});
console.log(input);
processInput();

// var input = "";
// process.stdin.resume();
// process.stdin.setEncoding('ascii');
// process.stdin.on('data', function (data) {input += data;});
// process.stdin.on('end', processInput);

 
