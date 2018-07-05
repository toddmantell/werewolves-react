import React from "react"
import styled from "styled-components"
import { string, number } from "prop-types"

const CharacterDiv = styled.div`
  padding: 0;
  margin: 0;
`

const CharacterDescription = styled.div`
  text-align: center;
  font-weight: 600;
`

const CharacterCard = ({ characterName, night, characterImage, description }) => {
  return (
    <CharacterDiv>
      <CharacterDescription>
        {characterName} <img src={characterImage} />
        <div>Night: {night}</div>
        <div>{description}</div>
      </CharacterDescription>
    </CharacterDiv>
  )
}

CharacterCard.propTypes = {
  characterName: string.isRequired,
  night: number.isRequired,
  characterImage: string.isRequired,
  description: string.isRequired
}

export default CharacterCard
