import gameGenerator from "../../src/gameGenerator"

describe("Name of the group", () => {
  it("should return a game object with a collection of players", () => {
    const newGame = gameGenerator([{ name: "Todd", character: "Dracula" }, "Karolina", "Kevin"])

    expect(newGame.players[0].name).toEqual("Todd")
    expect(newGame.players[0].character).toEqual("Dracula")
  })
})
