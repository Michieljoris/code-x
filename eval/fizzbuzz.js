var A = 3, B = 5, N = 10;
  
function fizbuz(A,B,N) {
    
    var array = [];

    function mark(each, letter, limit) {
        function iter(i) {
            if (i > limit) return;
            array[i] = array[i] || '';
            array[i] += letter;
            iter(i + each);
        }
        iter(each);
    }

    mark(A, 'F', N);
    mark(B, 'B', N);

    for (var i = 0; i<=N; i++)
        process.stdout.write((i?  ' ':'') + (array[i] || i));

    console.log();
}

fizbuz(A,B,N);
fizbuz(2,7,15);
