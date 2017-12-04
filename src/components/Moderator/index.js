import React, { Component } from 'react';
import ModeratorView from './ModeratorView';
import PropTypes from 'prop-types';
import { characterFactory } from './characterFactory';

export default class ModeratorContainer extends Component {
	state = {characters: []};

	addCharacterToGame = event => {
		const characterToAdd = characterFactory(event.target.value);
		this.setState({characters: [...characters, characterToAdd]});
	};

	render() {
		return <ModeratorView characters={[]} />;
	}
}

ModeratorContainer.propTypes = {
	
};