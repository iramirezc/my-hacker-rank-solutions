process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(var i = 0; i < n; i++){
       a[i] = readLine().split(' ').map(Number);
    }
    var d1 = d2 = 0;
    for (var y = 0; y < a.length; y++){
        for (var x = 0; x < a[y].length; x++){
            if (y === x) d1 += a[y][x];
            if (y + x === a.length - 1) d2 += a[y][x];
        }
    }
    console.log(Math.abs(d1 - d2));
}
