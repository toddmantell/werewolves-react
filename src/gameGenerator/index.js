import generateRandomCharacterAssignments from "./generateRandomCharacterAssignments";

export default (playersArray, isRandomlyGenerated, charactersInGame) => {
	//TODO: Need two options: 1. randomly assign characters 2. manually assign characters (manual assignment should happen in the UI, with assistance from a module)
	return {
		gameId: generateGameId(),
		players: isRandomlyGenerated ? generateRandomCharacterAssignments(playersArray, charactersInGame) : playersArray
	}
}

function generateGameId() {
	//long-term we'll probably make an api call or use the id generate by mongo or dynamo
	return `_wwrng${Math.round(Math.random() * 99999)}kjdfiurejkdf`;
}
