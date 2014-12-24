//test

//fizzbuzz


function fb(n) {
    var a = '' + n % 3 + n % 5;
    console.log(a);
    switch(a) {
      case '10': return 'fizz';
      case '01': return 'buzz';
      case '00': return 'fizzbuzz';
    default: return n;
    }
    return ((!(n % 3) && 'fizz' || '') + (!(n % 5) && 'buzz' || '')) || n;
}

function fizzbuzz(n) {
    for (var i=0; i<n; i++)
        console.log(fb(i));
}

fizzbuzz(16);
