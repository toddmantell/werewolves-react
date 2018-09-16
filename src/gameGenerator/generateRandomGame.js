import { CHARACTERS } from "../constants";
import findNumberOfWerewolves from "./findNumberOfWerewolves";
import { characterFactory } from "../characterGenerator/characterFactory";

//Now that we're tracking werewolves added, we need to figure out how many villagers to add and:
//a) if they are a villager we decrement the number of villagers left and b) if they are a special character, assign them and remove them from the array


export default (players, charactersInGame) => {
	let availableWerewolves = findNumberOfWerewolves(players, charactersInGame);

	let availableCharacters = charactersInGame;

	while (availableCharacters.length) {
		const assignedPlayers = players.map(player => {
			const randomIndex = Math.floor(Math.random() * charactersInGame.length);

			const assignedCharacter = characterFactory(charactersInGame[randomIndex]);

			const isWerewolf = checkForWerewolf(assignedCharacter.characterName);

			if (isWerewolf) availableWerewolves--;

			//remove all of the werewolf types from the list of available characters
			if (!availableWerewolves) availableCharacters = availableCharacters.filter(characterName => !checkForWerewolf(characterName));

			return { ...player, character: assignedCharacter };
		})

		return {
			gameId: '__game',
			players: assignedPlayers
		};
	}
}

function checkForWerewolf(characterName) {
	return characterName === CHARACTERS.WEREWOLF ||
		characterName === CHARACTERS.WHITE_WOLF ||
		characterName === CHARACTERS.BIG_BAD_WOLF ||
		characterName === CHARACTERS.DIRE_WOLF;
}

