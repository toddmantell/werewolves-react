import {render, hydrate} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ModeratorContainer from '../../moderator/index';

const App = () => (
	<Router>
		<Route to="/moderator" component={ModeratorContainer} />
		
		<div style={{color: 'purple', fontWeight: '600'}}>
			Put app content here.
		</div>
	</Router>
);

render(<App />, document.getElementById('root'));