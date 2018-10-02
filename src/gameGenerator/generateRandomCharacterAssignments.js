//@ts-check
import { CHARACTERS } from "../constants";
import findNumberOfWerewolves from "./findNumberOfWerewolves";
import { characterFactory } from "../characterGenerator/characterFactory";

const WEREWOLVES = [ CHARACTERS.WEREWOLF, CHARACTERS.WHITE_WOLF, CHARACTERS.BIG_BAD_WOLF, CHARACTERS.DIRE_WOLF ];
const VILLAGERS = [ CHARACTERS.VILLAGER, CHARACTERS.VIGILANTE ];

const getRandomCharacterAssignments = (players, charactersInGame) => {
	let availableWerewolves = findNumberOfWerewolves(players, charactersInGame);
	let availableVillagers = players.length - availableWerewolves;
	let availablePlayers = [...players];
	let assignedPlayers = [];

	charactersInGame.forEach(characterName => {
		if (WEREWOLVES.includes(characterName)) {
			while(availableWerewolves) {
				const randomIndex = Math.floor(Math.random() * availablePlayers.length);
				const playerToAssign = availablePlayers[randomIndex];
				playerToAssign.character = characterFactory(characterName);
				availablePlayers = availablePlayers.filter(player => player.id !== playerToAssign.id)			
				availableWerewolves--;
				assignedPlayers = [...assignedPlayers, playerToAssign];
				if (checkForSingleAssignmentCharacter(characterName)) return;
			}
		}

		if (VILLAGERS.includes(characterName)) {
			while(availableVillagers) {
				const randomIndex = Math.floor(Math.random() * availablePlayers.length);
				const playerToAssign = availablePlayers[randomIndex];
				playerToAssign.character = characterFactory(characterName);
				availablePlayers = availablePlayers.filter(player => player.id !== playerToAssign.id)
				availableVillagers--;
				assignedPlayers = [...assignedPlayers, playerToAssign];
				if (checkForSingleAssignmentCharacter(characterName)) return;
			}
		}
	})

	return assignedPlayers;
}

function checkForSingleAssignmentCharacter(characterName) {
	return characterName.includes(CHARACTERS.VIGILANTE) ||
	characterName.includes(CHARACTERS.WITCH) ||
	characterName.includes(CHARACTERS.DIRE_WOLF) ||
	characterName.includes(CHARACTERS.KNIGHT) ||
	characterName.includes(CHARACTERS.ANGEL) ||
	characterName.includes(CHARACTERS.CUPID) ||
	characterName.includes(CHARACTERS.DEFENDER) ||
	characterName.includes(CHARACTERS.COLLECTOR);
}

export default getRandomCharacterAssignments;
