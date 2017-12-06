import React from 'react';
import {render, hydrate} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ModeratorContainer from '../Moderator';
import Night from '../Night';
import Nav from '../Layout/Nav';

const App = () => (
	<main>
		<Nav />
		<div style={{color: 'purple', fontWeight: '600'}}>
			Put app content here.
		</div>
		<Route exact path="/" component={() => ''} />
		<Route path="/moderator" component={ModeratorContainer} />
		<Route path="/night" component={Night} />
	</main>
);

render(<Router><App /></Router>, document.getElementById('root'));