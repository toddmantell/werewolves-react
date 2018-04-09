import React from 'react';
import {string} from 'prop-types';
import {Link} from 'react-router-dom';

const MenuItem = ({icon, text, route}) => (
	<div>
		<Link to={route}>
			{icon}
			<div>
				{text}
			</div>
		</Link>
	</div>
);

MenuItem.propTypes = {
	icon: string,
	text: string
};

export default MenuItem;