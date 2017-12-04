import React from 'react';
import styled from 'styled-components';
import Character from './CharacterView';

const ModeratorView = props => (
	<main>
		{props.characters.map(item => <Character characterName={item.name} night={item.night}/>)}
	</main>
);

export default ModeratorView;