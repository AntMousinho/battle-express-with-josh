const BattleTurn = require('../src/battleTurn.js');
const Player = require('../src/player');

describe("Testing battleTurn class:", function () {
	let battleTurn, player1, player2;

	beforeEach(() => {
		player1 = new Player('test1');
		player2 = new Player('test2');
		battleTurn = new BattleTurn([player1, player2]);
	})

	it("switches turns to begin with", function () {
		battleTurn.switchTurn()
		expect(battleTurn.player1turn).toEqual(false)
	})

	it("when player1 attacks player 2 takes damage", function () {
		spyOn(player2, 'takeDamage');
		battleTurn.damage()
		expect(player2.takeDamage).toHaveBeenCalledWith(10);
	})

	it('checkGameOver returns false when player hp is above 0', () => {
		expect(battleTurn.checkGameOver()).toEqual(false);
	})
})

describe('Game over tests', () => {
	let battleTurn, player1, player2;

	it('checkGameOver returns true when player hp is 0', () => {
		player1 = new Player('test1');
		player2 = new Player('test2', 5);
		battleTurn = new BattleTurn([player1, player2]);
		battleTurn.damage();
		expect(battleTurn.checkGameOver()).toEqual(true);
	})
})