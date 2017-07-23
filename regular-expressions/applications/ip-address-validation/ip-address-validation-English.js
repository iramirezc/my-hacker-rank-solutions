process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});

function processData(input) {
    var regexpIPv6 = /^[\da-f]{1,4}:[\da-f]{1,4}:[\da-f]{1,4}:[\da-f]{1,4}:[\da-f]{1,4}:[\da-f]{1,4}:[\da-f]{1,4}:[\da-f]{1,4}$/i;
    input.split('\n').splice(1).forEach(function(ip){
        if (testIPv4(ip)) console.log('IPv4');
        else if (regexpIPv6.test(ip)) console.log('IPv6');
        else console.log('Neither');
    });
}

function testIPv4(ip){
    var valid = true;
    var regexpIPv4 = /^\d{1,4}\.\d{1,4}\.\d{1,4}\.\d{1,4}$/;
    if (!regexpIPv4.test(ip)) return false;
    ip.match(/\d{1,4}/g).forEach(function(group){
       if (parseInt(group) < 0 || parseInt(group) > 255) valid = false;
    });
    return valid;
}