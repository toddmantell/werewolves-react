import React from 'react';
import styled from 'styled-components';

const CharacterDiv = styled.div`
	padding: 0;
	margin: 0;
`;

const CharacterDescription = styled.div`
	text-align: center;
	font-weight: 600;
`;

const Character = ({characterName, night, characterImage}) => {
	return (
		<CharacterDiv>
			<CharacterDescription>
				{characterName}
				<div>
					Night: {night}
				</div>
			</CharacterDescription>
		</CharacterDiv>
	);
};

export default Character;
