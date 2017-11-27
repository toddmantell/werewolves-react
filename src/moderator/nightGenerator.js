import characterFactory from './characterFactory';

function nightGenerator(character) {
	if (character.direwolf === true) {
		return {
			name: 'Dire Wolf',
			nights: [2, 4, 6], //This should be dependent on number of players
			order: 2
		};
	}
}

//figure out from number of players, the maximum number of nights:
