import React from 'react';
import styled from 'styled-components';
import Character from './CharacterView';

export default ModeratorView = props => (
	<main>
		{props.characters.map((item, index) => <Character key={index + '-' + item.name} characterName={item.name} night={item.night}/>)}
	</main>
);