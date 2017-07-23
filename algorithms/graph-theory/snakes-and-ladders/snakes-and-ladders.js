/**
 * Game
 */
function Game() {
    this.board = [];
}

/**
 * Initializes a Adjacency List of n elements as a board of the game.
 * Each square of the board reaches the next 6 elements, only if the next < n;
 */
Game.prototype.initBoard = function (n) {
    for (var i = 0; i < n; i++) {
        this.board[i] = [];
        var next = i + 1;
        for (var dice = 1; next < n && dice <= 6; dice++) {
            this.board[i].push(next++);
        }
    }
    //console.log(this.board);
};

/**
 * Replaces a square of the board with the source/origin of a snake/ladder.
 */
Game.prototype.replace = function (oldVertex, newVertex) {
    this.board[oldVertex] = [];
    var i = oldVertex - 6;
    i = i < 0 ? 0 : i;
    for (; i < oldVertex; i++) {
        for (var j = 0; j < this.board[i].length; j++) {
            if (this.board[i][j] === oldVertex) {
                this.board[i][j] = newVertex;
                break;
            }
        }
    }
};

/**
 * Breadth First Search Algorithm.
 */
function BFS(graph, source) {
    var bfs = [];
    for (var i = 0; i < graph.length; i++) {
        bfs[i] = {
            level: null,
            parent: null
        };
    }
    bfs[source].level = 0;
    var queue = [];
    queue.push(source);
    while (queue.length > 0) {
        var u = queue.shift();
        for (i = 0; i < graph[u].length; i++) {
            var v = graph[u][i];
            if (bfs[v].level === null) {
                bfs[v].level = bfs[u].level + 1;
                bfs[v].parent = u;
                queue.push(v);
            }
        }
    }
    return bfs;
}

/**
 * Initializes the game and execs the BFS algotithm.
 */
function startGame(snakes_ladders) {
    var game = new Game();
    game.initBoard(100);
    snakes_ladders.forEach(function (s) {
        game.replace(s[0] - 1, s[1] - 1);
    });
    //console.log(game.board);
    var bfs = BFS(game.board, 0);
    var moves = bfs[bfs.length - 1].level;
    console.log(moves ? moves : -1);
}

function processData(input) {
    var i = 0;
    input = input.trim().split('\n');
    var testCases = parseInt(input[i++]);
    //console.log(testCases);
    while (testCases-- > 0) {
        var snakes_ladders = [];
        var nLadders = parseInt(input[i++]);
        while (nLadders-- > 0) {
            snakes_ladders.push(input[i++].split(' ').map(Number));
        }
        var nSnakes = parseInt(input[i++]);
        while (nSnakes-- > 0) {
            snakes_ladders.push(input[i++].split(' ').map(Number));
        }
        //console.log(snakes_ladders);
        startGame(snakes_ladders);
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