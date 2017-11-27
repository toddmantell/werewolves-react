import {render, hydrate} from 'react-dom';

const App = () => (
	<div style={{color: 'purple', fontWeight: '600'}}>
		Put app content here.
	</div>
);

render(<App />, document.getElementById('root'));