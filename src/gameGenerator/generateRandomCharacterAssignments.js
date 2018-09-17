//@ts-check
import { CHARACTERS } from "../constants";
import findNumberOfWerewolves from "./findNumberOfWerewolves";
import { characterFactory } from "../characterGenerator/characterFactory";

export default (players, charactersInGame) => {
	let availableWerewolves = findNumberOfWerewolves(players, charactersInGame);
	let availableVillagers = players.length - availableWerewolves;
	let availablePlayers = [...players];
	let assignedPlayers = [];

	charactersInGame.forEach(character => {		
		if (checkForWerewolf(character)) {
			while(availableWerewolves) {
				const randomIndex = Math.floor(Math.random() * availablePlayers.length);
				const playerToAssign = availablePlayers[randomIndex];
				playerToAssign.character = characterFactory(character);
				availablePlayers = availablePlayers.filter(player => player.id !== playerToAssign.id)			
				availableWerewolves--;
				assignedPlayers = [...assignedPlayers, playerToAssign];
			}
		}

		if (checkForVillager(character)) {
			while(availableVillagers) {
				const randomIndex = Math.floor(Math.random() * availablePlayers.length);
				const playerToAssign = availablePlayers[randomIndex];
				playerToAssign.character = characterFactory(character);
				availablePlayers = availablePlayers.filter(player => player.id !== playerToAssign.id)
				availableVillagers--;
				assignedPlayers = [...assignedPlayers, playerToAssign];
			}
		}		
	})
	return assignedPlayers;
}

function checkForWerewolf(characterName) {
	return characterName === CHARACTERS.WEREWOLF ||
		characterName === CHARACTERS.WHITE_WOLF ||
		characterName === CHARACTERS.BIG_BAD_WOLF ||
		characterName === CHARACTERS.DIRE_WOLF;
}

function checkForVillager(characterName) {
	return characterName === CHARACTERS.VILLAGER ||
		characterName === CHARACTERS.VIGILANTE;
}
