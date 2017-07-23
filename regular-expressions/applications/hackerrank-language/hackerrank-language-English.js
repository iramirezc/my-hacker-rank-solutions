function processData(input) {
    var regexp = /^(C|CPP|JAVA|PYTHON|PERL|PHP|RUBY|CSHARP|HASKELL|CLOJURE|BASH|SCALA|ERLANG|CLISP|LUA|BRAINFUCK|JAVASCRIPT|GO|D|OCAML|R|PASCAL|SBCL|DART||GROOVY|OBJECTIVEC)$/;
    input.trim().split('\n').splice(1).forEach(function(req){
       req.replace(/\s([A-Z]+)/, function (_, lang){
           console.log(regexp.test(lang) ? 'VALID' : 'INVALID');
       });
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
