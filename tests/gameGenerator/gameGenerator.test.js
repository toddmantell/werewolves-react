import gameGenerator from "../../src/gameGenerator"

describe("gameGenerator()", () => {
  it("should return a game object with a collection of players", () => {
		const newGame = gameGenerator([{ name: "Todd", id: 1 }, { name: "Karolina", id: 2 }, { name: "Kevin", id: 3 }, { name: "Kasia", id: 4 }, { name: "Jay", id: 5 }],
			true, ['werewolf', 'villager'])

		expect(newGame.gameId).toContain('_wwrng')
    expect(newGame.players[0]).toBeTruthy()
  })
})
