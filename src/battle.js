class Battle{
    constructor(player1,player2,){
        this.player1 = player1;
        this.player2 = player2;
        this.hp = 100
        this.player1next = true;
    }

    switchTurn(){
        if(this.player1turn){
            this.player1turn = false;
        } else{
            this.player1turn = true;
        }
    }

    takeDamage(damage){
        if(damage > this.hp){
            return this.hp = 0;
        } else{
        this.hp = this.hp - damage;
        return this.hp;
        }
    }
}