function processData(input) {
    input.trim().split('\n').splice(1).forEach(function(line){
        line = line.split(' ').map(Number);
        var prisioners = line[0];
        var sweets = line[1];
        var id = line[2];
        id = (id + sweets) % prisioners - 1;
        console.log(id > 0 ? id : prisioners);
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});
