export default (players, charactersInGame) => {
	const shouldAddThree = shouldHaveThreeWerewolves(players);

	if (shouldAddThree && charactersInGame.includes(CHARACTERS.DIRE_WOLF)) return 4;
	else if (shouldAddThree) return 3;
	else if (!shouldAddThree) return 2;
}

function shouldHaveThreeWerewolves(players) {
	return players.length > 10 ? true : false;
}
