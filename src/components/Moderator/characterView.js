import React from 'react';
import styled from 'styled-components';

const CharacterDiv = styled.div`
	padding: 0;
	margin: 0;
`;

const CharacterImage = styled.span`
	text-align: center;
`;

const CharacterDescription = styled.div`
	text-align: center;
	font-weight: 600;
`;

const Character = ({characterName, night, characterImage}) => {
	return (
		<CharacterDiv>
			<CharacterImage>{characterImage}</CharacterImage>
			<CharacterDescription>
				{characterName}
			</CharacterDescription>
		</CharacterDiv>
	);
};

export default Character;
