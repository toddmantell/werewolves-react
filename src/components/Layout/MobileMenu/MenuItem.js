import React from 'react';
import {string} from 'prop-types';

const MenuItem = ({icon, text, route}) => (
	<div>
		<a href={route}>{icon}</a>
		<div>
			{text}
		</div>
	</div>
);

MenuItem.propTypes = {
	icon: string,
	text: string
};

export default MenuItem;