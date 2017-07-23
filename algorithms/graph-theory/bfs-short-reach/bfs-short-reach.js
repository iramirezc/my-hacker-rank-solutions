function BFS(graph, start) {
    var bfs = [];
    for (var i = 0; i < graph.length; i++) {
        bfs[i] = {
            parent: null,
            level: null
        };
    }
    bfs[start].level = 0;
    var queue = [];
    queue.push(start);
    while (queue.length > 0) {
        var u = queue.shift();
        for (i = 0; i < graph[u].length; i++) {
            var v = graph[u][i];
            if (bfs[v].level === null) {
                bfs[v].level = bfs[u].level + 6;
                bfs[v].parent = u;
                queue.push(v);
            }
        }
    }
    return bfs;
}

function processData(input) {
    input = input.split('\n');
    var i = 0;
    var t = parseInt(input[i++]);
    var temp, n, e, graph, node, edge, from, to, s, bfs, level;
    // Testcases
    while (t-- > 0) {
        temp = input[i++].split(' ');
        n = parseInt(temp[0]);
        e = parseInt(temp[1]);
        graph = [];
        // Create graph with 'n' nodes.
        for (node = 0; node < n; node++) {
            graph[node] = [];
        }
        // Create 'e' edges
        for (edge = 0; edge < e; edge++) {
            temp = input[i++].split(' ');
            from = parseInt(temp[0]) - 1;
            to = parseInt(temp[1]) - 1;
            graph[from].push(to);
            graph[to].push(from);
        }
        // Starting point
        s = parseInt(input[i++]) - 1;
        // Do BFS
        bfs = BFS(graph, s);
        // Print distances
        for (node = 0; node < n; node++) {
            if (node !== s) {
                level = bfs[node].level || -1;
                process.stdout.write(level + ' ');
            }
        }
        console.log();
    }
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