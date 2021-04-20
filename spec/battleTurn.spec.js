const BattleTurn = require ('../src/battleTurn.js');

describe("Testing battleTurn class:", function(){
    
    let battleTurn

    it("switches turns to begin with", function(){
     battleTurn = new BattleTurn()
     battleTurn.switchTurn()
     expect(battleTurn.player1next).toEqual(false)
    })

    it("when player1 attacks pplayer 2 takes damage", function(){
        battleTurn = new BattleTurn()
        battleTurn.takeDamage(10, player2)
        expect().toEqual()
       })
})