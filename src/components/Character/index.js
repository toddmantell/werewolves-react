import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import CharacterCard from "./characterCard"

const Page = styled.div`
  padding: 0;
  margin: 0;
`

const CharacterPage = ({ characters }) => (
  <Page>{characters.map((character, index) => <CharacterCard key={`card-${index}`} {...character} />)}</Page>
)

CharacterPage.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      characterName: PropTypes.string,
      night: PropTypes.number,
      characterImage: PropTypes.string,
      description: PropTypes.string
    })
  ).isRequired
}

export default CharacterPage
