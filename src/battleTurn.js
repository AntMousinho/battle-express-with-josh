class BattleTurn {
    constructor(playerArray){
        this.player1turn = true;
        this.playerArray = playerArray;         
    }

    switchTurn(){
		return this.player1turn = !this.player1turn
    }

	currentTurn() {
		if(this.player1turn) {
			return this.playerArray[0]
		}
		return this.playerArray[1];
	}

    damage(){ 
        if(this.player1turn = true){
            this.playerArray[1].takeDamage(10)
        } else{
            this.playerArray[0].takeDamage(10)
        }
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