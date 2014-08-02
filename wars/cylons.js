var assert = require('assert');

function Cylon(model){
    this.model = model;
  
}

Cylon.prototype.attack = function() {
    return "Destroy all humans!";
}

function HumanSkin(model){
    this.model = model;

}

HumanSkin.prototype = new Cylon();

HumanSkin.prototype.infiltrate = function() {
    return "Infiltrate the colonies";
}

  
var cylon = new Cylon("raider");

// console.log(Object.keys(assert));
assert.equal(cylon.attack(), "Destroy all humans!");

var caprica = new HumanSkin(6);

assert.equal(caprica.infiltrate(), "Infiltrate the colonies");
assert.equal(caprica.attack(), "Destroy all humans!");
console.log(caprica.attack());
console.log(caprica instanceof Cylon);
console.log(Object.keys(caprica));

function cache(fn) {
    fn.cache = fn.cache = {};
    var mem = fn.cache;
    return function(x, y) {
        if (mem[x] && mem[x][y]) return mem[x][y];
        mem[x] = mem[x] || {};
        mem[x][y] = fn(x,y);
        console.log(mem);
        return mem[x][y];
    };
}
function f(x,y) {
    console.log('invoked', x,y);
    return x + ',' + y;
}

var cached = cache(f);
console.log(cached(1,2));
console.log(cached(1,2));
console.log(cached(1,2));
