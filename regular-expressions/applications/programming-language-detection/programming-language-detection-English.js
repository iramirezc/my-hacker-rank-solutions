function processData(input) {
    var regC = /#include<.+\..+>|scanf\(.+\);|printf\(.+\);/g;
    var regJava = /import\sjava\.io\.\w+;|System\.out\.println\(.+\);|(public|private)\s+(static)?\s+(void)?.+\(.+\)\s+{|Integer\.parseInt\(.+\);|IOException/g;
    var regPython = /if\s+.+:|while\s+.+:|def\s+.+\(.+\):|class\s+.+:|print\s+.+/g;
    var languages = {'C': input.match(regC), 'Java': input.match(regJava), 'Python':input.match(regPython)};
    var max = 0, key = '';
    for (var l in languages)
        if (languages[l] && languages[l].length > max)
            key = l;
    console.log(key);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});