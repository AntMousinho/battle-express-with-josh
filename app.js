const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: false }));
const BattleTurn = require('./src/battleTurn');
const Player = require('./src/player');

const battleTurn = new BattleTurn();

app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	battleTurn.clearPlayers();
	battleTurn.gameOver = false;
	res.render('pages/index')
})

app.post('/battle', (req, res) => {
	let player2
	const player1 = new Player(req.body.player1Name);
	if(req.body.player2Name === ''){
		player2 = new Player('Computer');
	} else{
	player2 = new Player(req.body.player2Name);
	}
	battleTurn.addPlayers(player1, player2)
	res.render('pages/battle', { 
		player: battleTurn.playerArray[0],
		opponent: battleTurn.playerArray[1]
	})
})



app.get('/battle', (req, res) => {
	if(battleTurn.checkGameOver() === true) {
		res.redirect('/victory');
	} else if(battleTurn.playerArray[1].name === 'Computer'){
		res.redirect('/computerTurn');
	} else {
		battleTurn.switchTurn()
	
		res.render('pages/battle', { 
			player: battleTurn.playerArray[0],
			opponent: battleTurn.playerArray[1]
		})
	}
})

app.post('/turn', (req,res) => {
	const attackPlayer = battleTurn.playerArray[0];
	const recievingPlayer = battleTurn.playerArray[1];
	const damage = Math.floor(Math.random()*101);
	// const damage = 10;
	battleTurn.damage(damage)
	res.render('pages/turn', {
		attackingPlayer: attackPlayer,
		recievingPlayer: recievingPlayer,
		damage: damage
	})
    
})

app.get('/victory', (req,res) => {
res.render('pages/victory', {
	champion: battleTurn.playerArray[0].name,
	loser: battleTurn.playerArray[1].name
})
})

app.get('/computerTurn', (req, res) => {
	battleTurn.switchTurn()
	const attackPlayer = battleTurn.playerArray[0];
	const recievingPlayer = battleTurn.playerArray[1];
	const damage = Math.floor(Math.random()*101);
	// const damage = 10;
	battleTurn.damage(damage)
	res.render('pages/computerTurn', {
		attackingPlayer: attackPlayer,
		recievingPlayer: recievingPlayer,
		damage: damage
	})
})




app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})