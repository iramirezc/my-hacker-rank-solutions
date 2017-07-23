function processData(input) {
    var tags = [], attrs = {};
    input.replace(/<(\w+)[^<>]*\/?>/g, function(match, tag){
        if (tags.indexOf(tag) == - 1){
            tags.push(tag);
            attrs[tag] = [];
        }
        match.replace(/((\w+)=("|')[^"']*\3)+/g, function(_, attr, attrname){
            if (attrs[tag].indexOf(attrname) == -1) attrs[tag].push(attrname);
        });
    });
    tags.sort().forEach(function(tag){
        console.log(tag + ':' + attrs[tag].sort().join(','));
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});
