function processData(input) {
    input.trim().split('\n').splice(1).forEach(function(number){
        number = number.split(/ |-/);
        console.log('CountryCode=' + number[0] + ',LocalAreaCode=' + number[1] + ',Number=' + number[2]);
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});