const net = require('net');

class Game{
    players = []
    isStarted = false;
    gameArray = [];
    constructor(){}
    start(){ 
        this.isStarted = true; this.gameArray = [ [" "," "," "],[" "," "," "],[" "," "," "] ];
        this.players.forEach(player => {
            player.clear(24);
        });
    }
    restart(){}
}

class Player{
    constructor(socket){
        this.Socket = socket;
        this.Simbol = "X";
    }
    clear(rows){
        for(let i=0; i<rows; i++){
            this.Socket.write("\n");
        }
    }
}

const game = new Game();

var server = net.createServer();

    

server.on('connection', (socket)=>{
    game.players.length == 0 ? game.players.push(new Player(socket, "X")) : game.players.push(new Player(socket, "O"));
    console.log(game.players.length);
    if(game.players.length >= 2 ) {
        game.start();
    }
});

server.listen(6969);



