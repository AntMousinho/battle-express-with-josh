class BattleTurn {
    constructor(playerArray = []){
        this.playerArray = playerArray;         
    }

	addPlayers(player1, player2){
		return this.playerArray.push(player1, player2);
	}

    switchTurn(){
		return this.playerArray.reverse();
    }

	currentTurn() {
			return this.playerArray[0];
	}

    damage(hpPoints){ 
        this.playerArray[1].takeDamage(hpPoints)
		this.checkGameOver();
        this.switchTurn();
    }

	checkGameOver() {
		let gameOver = false;
		this.playerArray.forEach(player => {
			if(player.hp === 0) {
				gameOver = true;
			}
		})
		return gameOver;
	}
    
}

module.exports = BattleTurn;