function grow2(n) {
    var s = 1;
    var odd = (n%2 === 1);
    if (odd) n--;
    var max = n/2;
    for (var i=0; i<max; i++) {
        s = s*2 + 1;
    }
    if (odd) s*=2;
    return s;
}

function grow(n) {
    var size = 1, flip =1;
    var f = [
        function (n) { return n*2; },
        function (n) { return n+1; }];
    for (var i=0; i<n; i++) {
        flip = 1-flip;
        size = f[flip](size); }
    return size;
}

for (var i=0;i<60;i++)
    console.log(grow(i));

