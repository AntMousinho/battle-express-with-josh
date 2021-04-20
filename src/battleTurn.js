class BattleTurn {
    constructor(playerArray){
        this.player1turn = true;
        this.playerArray = playerArray;         
    }

    switchTurn(){
        if(this.player1turn){
            this.player1turn = false;
        } else{
            this.player1turn = true;
        }
    }

    damage(){ 
        if(this.player1turn = true){
            this.playerArray[1].takeDamage(10)
        } else{
            this.playerArray[0].takeDamage(10)
        }
        this.switchTurn();
    }
    
}