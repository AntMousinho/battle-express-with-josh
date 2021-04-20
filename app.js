const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: false }));
const BattleTurn = require('./src/battleTurn');
const Player = require('./src/player');

app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('pages/index')
})

app.post('/battle', (req, res) => {
	const player1 = new Player(req.body.player1Name);
	const player2 = new Player(req.body.player2Name);
	const battleTurn = new BattleTurn([player1, player2]);
	res.render('pages/battle', { 
		player1: {
			name: player1.name,
			hp: player1.hp
		},
		player2: {
			name: player2.name,
			hp: player2.hp
		},
		currentTurn: battleTurn.currentTurn().name
	});
})



app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})