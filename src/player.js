class Player{
    constructor(name, hp = 100){
        this.name = name;
        this.hp = hp;
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

module.exports = Player
