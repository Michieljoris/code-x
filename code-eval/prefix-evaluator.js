var fs  = require("fs");
var util = require('util');

var ops = {
    '+': function (a, b) { return a + b; },
    '*': function (a, b) { return a * b; },
    '/': function (a, b) { return a / b; }
}

function parse(tokens) {
    var p = 0;
    function recur() {
        var token = tokens[p++];
        if (!ops[token]) return token; //must be number
        return { op: token,
                 left: recur(),
                 right: recur()  };
    }
    return recur();
}

function evaluate(node) {
    if (typeof node !== 'object') return parseInt(node);
    return ops[node.op](evaluate(node.left), evaluate(node.right));
}

// var fileName = 'prefix-expressions.txt';
// fs.readFileSync(fileName).toString().split('\n').forEach(function (line) {
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var parseTree = parse(line.split(' '));
        // console.log(util.inspect(parseTree, { depth: 10, colors: true }));
        console.log(evaluate(parseTree));
    }
});
