import generateRandomGame from "../../src/gameGenerator/generateRandomGame";
import { CHARACTERS, NIGHTS } from "../../src/constants";
import findNumberOfWerwolves from "../../src/gameGenerator/findNumberOfWerewolves";

describe('generateRandomGame()', () => {
	it('should return 5 players with 5 characters when given those arrays', () => {
		const expected = {
			players: [
				{
					name: 'Todd',
					character: {
						name: CHARACTERS.VILLAGER,
						night: NIGHTS.FIRST_NIGHT_ONLY,
						order: 20
					}
				}
			]
		};

		const playersArray = [{name: 'Todd', id: ''}, {name: 'Kasia', id: ''}, {name: 'Jay', id: ''}, {name: 'Karolina', id: ''}, {name: 'Kevin', id: ''}];

		const newRandomGame = generateRandomGame(playersArray, [CHARACTERS.WEREWOLF, CHARACTERS.WEREWOLF, CHARACTERS.VILLAGER, CHARACTERS.VIGILANTE]);

		console.log('newRandomGame: ', newRandomGame);
		
		const villagerCount = newRandomGame.players.reduce((accumulator, player) => {
			if (player.character.characterName === CHARACTERS.VILLAGER || player.character.characterName === CHARACTERS.VIGILANTE) return accumulator + 1
		})

		expect(villagerCount).toEqual(3)
	})

	it('should return 2 werewolves in a 5 player array', () => {
		const players = ['Todd', 'Kasia', 'Jay', 'Karolina', 'Kevin'];

		expect(findNumberOfWerwolves(players)).toEqual(2);
	})
})
