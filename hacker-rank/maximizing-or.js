'use strict';

var parseNumber = function (s) { return parseInt(s, 10); };

function processInput() {
    var lines = input.split("\n");
    var L = parseNumber(lines[0]).toString(2).split('')
        .map(function(c) { return c=='0' ? 0 : 1; });
    var R = parseNumber(lines[1]).toString(2).split('')
        .map(function(c) { return c=='0' ? 0 : 1; });
    var diff = R.length - L.length;
    while (diff) { L.unshift(0); diff--; }
    // console.log(L);
    // console.log(R);
    var l = 0;;
    R.every(function(d, i) { l = i;
                             return  L[i] === d;
                           });
    // console.log(l);
    
    R.slice(l+1).forEach(function(r,i) {
        var index = i+l+1;
        // console.log(index, r, L[index], r ^ L[index]);
        if (! r ^ L[index]) {
            R[index] = R[index] & 0;
            L[index] = L[index] | 1;
        }
    });
    // console.log(L);
    // console.log(R);
    
    R = R.join('');
    L = L.join('');
    // console.log(L, parseInt(L,2));;
    // console.log(R, parseInt(R,2));;
    var result = parseInt(R,2) + parseInt(L,2);
    console.log(result.toString(2), result);
    // return (result.toString(2), result);
    
} 

// var input = '200\n300';
// var input = '276\n300';
// console.log(input);
// processInput();
var L = 200;
var R = 202;
var input;
for (var i = L; i< R; i++ ) {
    input = i + '\n' + R;
    console.log(i,R,processInput());
    
}
    

// var input = "";
// process.stdin.resume();
// process.stdin.setEncoding('ascii');
// process.stdin.on('data', function (data) {input += data;});
// process.stdin.on('end', processInput);
