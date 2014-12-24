//fizzbuzz
function fizzbuzz1(n) {
    //defry: only one test and one string of each for fizz and buzz.
    return ((!(n % 3) && 'fizz' || '') + (!(n % 5) && 'buzz' || '')) || n;
}

function fizzbuzz2(n) {
    //if only we had pattern matching...
    //usering ternary operator
    switch('' + (n%3 ? 0:1) + (n%5 ? 0:1)) {
      case '10': return 'fizz';
      case '01': return 'buzz';
      case '11': return 'fizzbuzz';
    default: return n;
    }
}

function fizzbuzz3(n) {
    //use logic ors and ands
    switch('' + (!(n%3) && 1 || 0) + (!(n%5) && 1 || 0)) {
      case '10': return 'fizz';
      case '01': return 'buzz';
      case '11': return 'fizzbuzz';
    default: return n;
    }
}

function fizzbuzz4(n) {
    //-if- you have to use if:
    var result = '';
    if (n%3 === 0) result = 'fizz';
    if (n%5 === 0) result  += 'buzz';
    return result || n;
}

function test(n) {
    for (var i=0; i<n; i++)
        console.log(i, fizzbuzz1(i));
}

test(16);
