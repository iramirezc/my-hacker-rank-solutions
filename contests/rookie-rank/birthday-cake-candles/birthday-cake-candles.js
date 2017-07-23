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
    var height = readLine().split(' ').map(Number);
    var tallest = height[0], total = 0;
    for (var i = 0; i < n; i++){
        if (height[i] > tallest){
            total = 0;
            tallest = height[i];
        }
        if(height[i] == tallest){
            total ++;
        }
    }
    console.log(total);
}
