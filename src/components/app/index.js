import React from 'react';
import {render, hydrate} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ModeratorContainer from '../Moderator';

const App = () => (
	<Router>
		<main>			
			<div style={{color: 'purple', fontWeight: '600'}}>
				Put app content here.
				<div><Link to="/moderator">Moderator</Link></div>
			</div>
			<Route exact path="/" component={() => 'Hello'} />
			<Route path="/moderator" component={ModeratorContainer} />
		</main>
	</Router>
);

render(<App />, document.getElementById('root'));