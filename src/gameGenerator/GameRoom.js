export default class GameRoom {
	constructor(moderatorId) {
		this.moderatorId = moderatorId;
		this.db = this.getDb() || {}
		this.id = this.createRoom().roomId
	}

	getDb() {
		return {moderators: [{moderatorId: 0, moderatorName: 'root', room: {roomId: 'AE723'}}]};
		//TODO: use a json file as a temporary db, so we aren't bogged down with db stuff while working ("the db is a detail")
		// fs.readFile('./db.json', 'utf8', (error, data) => {
		// 	if (error) {
		// 		throw new Error('There was an error reading from the database', error)
		// 	}
			
		// 	if (data && data.tables) return data
		// })
	}

	createRoom() {
		const existingRoom = this.checkForExistingRoom()

		if (existingRoom) return existingRoom;

		const room = {
			id: null,
			games: [
				{gameId: null}
			]
		};

		return room;
	}

	checkForExistingRoom() {
		if (this.db && this.db.moderators.length) {
			const moderator = this.db.moderators.find(moderator => moderator.moderatorId === this.moderatorId);
	
			return moderator.room || null;
		}
	}
}
