import React from "react"
import * as constants from "../../src/constants"
import CharacterPage from "../../src/components/Character"

describe("CharacterPage Tests", () => {
  //We're getting 8 divs instead of 9 (9 because the Cards should be wrapped in a div)
  it("should render 2 cards when given an array with two characters", () => {
    const charactersArray = [
      {
        characterName: "Bob",
        night: constants.FIRST_NIGHT_ONLY,
        characterImage: "somepath/path",
        description: "He's a character"
      },
      {
        characterName: "Bonnie",
        night: constants.EVERY_OTHER_NIGHT,
        characterImage: "somepath/path",
        description: "She's a character"
      }
    ]

    const fullyRenderedPage = render(<CharacterPage characters={charactersArray} />)

    expect(fullyRenderedPage.find("div").length).toBe(8)
  })

  it("should render 2 character image tags when given an array with two characters", () => {
    const charactersArray = [
      {
        characterName: "Bob",
        night: constants.FIRST_NIGHT_ONLY,
        characterImage: "somepath/path",
        description: "He's a character"
      },
      {
        characterName: "Bonnie",
        night: constants.EVERY_OTHER_NIGHT,
        characterImage: "somepath/path",
        description: "She's a character"
      }
    ]

    const fullyRenderedPage = render(<CharacterPage characters={charactersArray} />)

    expect(fullyRenderedPage.find("img").length).toBe(2)
  })
})
