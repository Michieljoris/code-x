var fs = require('fs');

function LCS2(x,y) {
    console.log('x', x,'y', y);
    var table = [];
    function recur(x,y) {
        if (!x.length || !y.length) return "";
        if (x[x.length-1] === y[y.length-1]) {
                var s;
            if (!table[x.length-2]) table[x.length-2] = [];
            s = table[x.length-2][y.length-2];
            table[x.length-2][y.length-2] = s = 
                s || recur(x.slice(0,x.length-1),
                         y.slice(0,y.length-1));
            return s + x[x.length-1];
        }
        if (!table[x.length-2]) table[x.length-2] = [];
        var s1 = table[x.length-2][y.length-1];
        table[x.length-2][y.length-1] = s1 =
            s1 || recur(x.slice(0,x.length-1),y);
        if (!table[x.length-1]) table[x.length-1] = [];
        var s2 = table[x.length-1][y.length-2];
        table[x.length-1][y.length-2] = s2 =
            s2 || recur(x,y.slice(0,y.length-1));
        return  s1.length > s2.length ? s1 : s2;
    }
    return recur(x,y);
}

var memo = {};
function LCS(x, y) {
  if (typeof memo[x + "," + y] !== "undefined") {
    return memo[x + "," + y];
  } else {
    if (x === "" || y === "") {
      memo[x + "," + y] = "";
      return memo[x + "," + y];
    }
    
    if (x[0] === y[0]) {
      memo[x + "," + y] = x[0] + LCS(x.slice(1), y.slice(1));
      return memo[x + "," + y];
    }
    
    var lcsX = LCS(x.slice(1), y),
        lcsY = LCS(x, y.slice(1));
    memo[x + "," + y] = lcsX.length > lcsY.length ? lcsX : lcsY;
    return memo[x + "," + y];
  }
}

// var fileName = process.argv[2];
var fileName = './LCS.txt';
fs.readFileSync(fileName).toString().split('\n').forEach(function (line) {
    if (line.length) console.log(LCS.apply(this, line.split(';')));
});
console.log(memo);
