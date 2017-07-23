function processData(input) {
    var i = 0, t = parseInt(input[i++]), abc = {};
    var n = t;
    while (t-- > 0) {
        var s = input[i++];
        for (var j = 0, len = s.length; j < len; j++) {
            if (!abc.hasOwnProperty(s[j])) {
                abc[s[j]] = {};
            }
            abc[s[j]][t] = true;
        }
    }
    var total = 0;
    for(var k in abc){
        if(abc.hasOwnProperty(k)){
            if(Object.keys(abc[k]).length === n ){
                total++;
            }
        }
    }
    console.log(total);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n'));
});