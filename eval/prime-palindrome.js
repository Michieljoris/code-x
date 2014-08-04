// Largest prime palindrome under 1000
var assert = require('assert');

function isPalindrome(n) {
    var s = (n+'').split('');
    return s.slice(0, s.length/2).join('') ===
        s.slice(Math.ceil(s.length/2)).reverse().join('');
}

function isPrime(n) {
    var test = [];
    var limit = Math.ceil(Math.sqrt(n));
    for (var i=2; i<=limit; i++) {
        if (n%i === 0) return false;
    }
    return true;
    
}

// var r = isPrime(8);
// console.log(r);
function largest(max){
    var i = max-1;
    do {
        if (isPrime(i) && isPalindrome(i)) return i;
        i-=2;
    }
    while(i>0);
    return false;
};

var max = 10;
var iter = 7;
for (var f = 1; f<iter; f++) {
    var r= largest(max); 
    console.log(max, r);
    max *= 100;
}

 // assert.equal(largest(1000), 939);
//I get up to 99999199999.., takes a while
// var o = {};
// var max = 10000000;
function power(x,n) {
    var f = x;
    for (var i=1; i<n; i++)
        x *= f;
    return x;
}
// var max = power(10, 7);
// console.log(max);
// for (var i = 2; i< max; i+=2)
//     o[i] = true;

function deleteMultiples(n,o) {
    return Object.keys(o).filter(function(k) {
        return k%n !== 0;
    });
    
}
// console.log(deleteMultiples(5,{ 3:3, 5:5 }));
function isPrime2(test){
    if (test%2 === 0) return false;
    function recur(n, o, i) {
        // console.log(n, o, i);;
        if (!i) return true;
        if (n%i === 0) return false;
        o = deleteMultiples(n, o);
        return recur(n, o, Object.keys(o)[0]);
    
    }
    var o = {};
    for (var i = 3; i< Math.sqrt(test); i+=2)
        o[i] = true;
    return recur(test, o, Object.keys(o)[0]);
    
}

// console.log(isPrime2(100000));
// for (var j = 3; j< 1000; j+=2) {
//     if (isPrime2(j)) console.log(j);
// }

// console.log(Object.keys(o).length);
// deleteMultiples(3);
// deleteMultiples(5);
// deleteMultiples(7);
// deleteMultiples(11);
// deleteMultiples(13);
// deleteMultiples(17);
// console.log(Object.keys(o).length);
