import React from 'react';
import {render, hydrate} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ModeratorContainer from '../Moderator';

const App = () => (
	<Router>
		<main>
			<Route to="/moderator" component={ModeratorContainer} />			
			<div style={{color: 'purple', fontWeight: '600'}}>
				Put app content here.
			</div>
		</main>
	</Router>
);

render(<App />, document.getElementById('root'));