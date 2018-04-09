/* eslint curly: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import TopNav from './Nav';
import Footer from './Footer';
import MobileNav from './MobileMenu';

const Layout = props => (
	<div>
		<Nav />
		<h2>Header!</h2>
		<Footer />
		{
			props.windowSize < 400 ? <MobileMenu /> : null
		}
	</div>
);

function renderTopOrBottomNav(windowSize) {
	if (windowSize > 400) return <TopNav />;
	else if (windowSize < 400) return <MobileNav />;
	return null;
}

Layout.propTypes = {

};

export default Layout;