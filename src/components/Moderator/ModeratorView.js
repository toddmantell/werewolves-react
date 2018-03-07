import React from 'react';
import styled from 'styled-components';
import Character from './CharacterView';
import propTypes from 'prop-types';

export default ModeratorView = props => (
	<main>
		{props.characters.map((item, index) => <Character key={index + '-' + item.name} characterName={item.name} night={item.night}/>)}
	</main>
);

ModeratorView.propTypes = {
	characters: propTypes.shape({
		characterName: propTypes.string,
		night: propTypes.number,
		characterImage: propTypes.string,
		description: propTypes.string
	})
};