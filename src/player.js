class Player{
    constructor(name){
        this.name = name;
        this.hp = 100;
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