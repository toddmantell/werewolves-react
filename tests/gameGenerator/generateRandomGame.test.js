//@ts-check
import generateRandomCharacterAssignments from "../../src/gameGenerator/generateRandomCharacterAssignments";
import { CHARACTERS, NIGHTS } from "../../src/constants";
import findNumberOfWerwolves from "../../src/gameGenerator/findNumberOfWerewolves";

describe('generateRandomGame()', () => {
	it('should return 5 players with 5 characters when given those arrays', () => {
		const playersArray = [{ name: "Todd", id: 1 }, { name: "Karolina", id: 2 }, { name: "Kevin", id: 3 }, { name: "Kasia", id: 4 }, { name: "Jay", id: 5 }];
		const charactersInGame = [CHARACTERS.VILLAGER, CHARACTERS.WEREWOLF];
		const randomlyGeneratedCharacters = generateRandomCharacterAssignments(playersArray, charactersInGame);
		
		let villagerCount = 0;
		
		randomlyGeneratedCharacters.forEach(player => {
			if (player.character.name === CHARACTERS.VILLAGER || player.character.name === CHARACTERS.VIGILANTE) return villagerCount++;		
		})
		
		expect(villagerCount).toEqual(3)
	})

	it('should return 2 werewolves in a 5 player array', () => {
		const players = ['Todd', 'Kasia', 'Jay', 'Karolina', 'Kevin'];

		expect(findNumberOfWerwolves(players)).toEqual(2);
	})
})
