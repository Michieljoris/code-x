function moveZeros(arr) {
    var a2 = [];
    var a1 = arr.filter(function(e) {
        if (typeof e === 'number' && e === 0) {
            a2.push(0);
            return false;
        }
        return true;
    });
    return a1.concat(a2);
}     
    
var r =  moveZeros([false,1,0,1,2,0,1,3,"a"]); // returns[false,1,1,2,1,3,"a",0,0]
console.log(r);
