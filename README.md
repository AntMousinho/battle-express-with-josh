# Battle

## Domain Model
- index page with 'enter names' heading
	- 2 input boxes for each name
	- 'Submit names' button
- When you click submit names, post names, instantiate player class and battle class
	- render '/battle' page

- '/battle' page:
	- on left, displays player 1's hp and name
	- on right, displays player 2's hp and name
	- below, displays whose turn it is (or switch bold text depending whose go it is)
	- attack button
		- displays 'antony attacked Josh and did 10 damage'
		- reduces other players health
		- switches turn
	- when player hp gets to 0
		- post winning player and render to '/winner'

- '/winner':
	- displays 'congratulations [player1], you beat the shit out of [player2]. Feel good about yourself?'


| Object | Properties | Message | context | Output |
| - | - | - | - | - |
| Player | this.hp @int | takeDamage(amount)() | reduces this.hp by amount. if amount > hp, reduce hp to 0 | return this.hp |
| Battle | this.player = [] | attack() | check whose turn it is, call takeDamage(10) on the other player. then switch turns | return  |
|  | this.player1next = true; |  |  |  |