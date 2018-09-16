import GameRoom from "../../src/gameGenerator/GameRoom"

describe("GameRoom", () => {
  it("should have a game room and a db", () => {
    const room = new GameRoom(0)

    expect(room.db).toMatchObject({
      moderators: [{ moderatorId: 0, moderatorName: "root", room: { roomId: "AE723" } }]
    })
  })

  it("should create a room", () => {
    const room = new GameRoom(0)

    expect(room.id).toEqual("AE723")
  })
})
