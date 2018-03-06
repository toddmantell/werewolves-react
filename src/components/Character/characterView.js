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

export default ({characterName, night, characterImage, description}) => {
	return (
		<CharacterDiv>
			<CharacterDescription>
				{characterName} {characterImage}
				<div>
					Night: {night}
				</div>
				<div>
					{description}
				</div>
			</CharacterDescription>
		</CharacterDiv>
	);
};
