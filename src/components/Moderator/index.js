import React, { Component } from 'react';
import ModeratorView from './ModeratorView';
import PropTypes from 'prop-types';
import { characterFactory } from './characterFactory';

export default class ModeratorContainer extends Component {
	state = {characters: [{ name: 'characterName', night: 1, order: 20 }]};

	addCharacterToGame = event => {
		const characterToAdd = characterFactory(event.target.value);
		this.setState({characters: [...characters, characterToAdd]});
	};

	render() {
		return <ModeratorView characters={this.state.characters} addCharacterToGame={this.addCharacterToGame} />;
	}
}

ModeratorContainer.propTypes = {
	
};

//TODO: 1) Add logic for adding a character 2) how would we store a game in the database (mlab)?