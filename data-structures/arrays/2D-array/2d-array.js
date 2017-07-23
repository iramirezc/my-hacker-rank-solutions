process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});

function processData(input) {
    var array = [];
    input.trim().split('\n').forEach(function(line, i){
        array[i] = line.split(' ').map(Number);
    });
    var max = null;
    for (var y = 1; y < array.length - 1; y++){
        for (var x = 1; x < array.length - 1; x++){
            var hourglass = array[y - 1][x - 1] + array[y - 1][x] + array[y - 1][x + 1] + array[y][x] + array[y + 1][x - 1] + array[y + 1][x] + array[y + 1][x + 1];
            if (max === null || hourglass > max) max = hourglass;
        }
    }
    console.log(max);
}
