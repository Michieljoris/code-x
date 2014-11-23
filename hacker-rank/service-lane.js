'use strict';

var parseNumber = function (s) { return parseInt(s, 10); };

function processInput() {
    var lines = input.split("\n");
    var widths = lines[1].split(' ').map(parseNumber);
    lines = lines.slice(2)
        .filter(function(line) {return line;})
        .map(function(test) {return test.split(' ').map(parseNumber);})
        .map(function(test) {
            return widths.slice(test[0], test[1]+1).sort()[0];
        });
    console.log(lines.join('\n'));
}

var fs = require('fs-extra');
var input = fs.readFileSync('./service-lane.txt', { encoding: 'utf8'});
console.log(input);
processInput();

// var input = "";
// process.stdin.resume();
// process.stdin.setEncoding('ascii');
// process.stdin.on('data', function (data) {input += data;});
// process.stdin.on('end', processInput);

