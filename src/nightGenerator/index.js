export default function (character) {
	if (character.characterName === 'direwolf') {
		return {
			name: 'Dire Wolf',
			nights: [2, 4, 6], //This should be dependent on number of players
			order: 2
		};
	}
}

//figure out from number of players, the maximum number of nights:
