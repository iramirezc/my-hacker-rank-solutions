function processData(input) {
    var id, q, t;
    var regID = /<div.*class="(question-summary)".*id="\1-(\d+)".*>/gi;
    var regQ = /<a.*class="question-hyperlink".*>(.+)<\/a>/gi;
    var regT = /<span.*class="relativetime".*>(.+)<\/span>/gi;
    while((id = regID.exec(input)) != null){
        if ((q = regQ.exec(input)) !== null)
            if((t = regT.exec(input)) !== null)
                console.log(id[2].trim() + ';' + q[1].trim() + ';' + t[1].trim());
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {_input += input;});
process.stdin.on("end", function () {processData(_input);});
