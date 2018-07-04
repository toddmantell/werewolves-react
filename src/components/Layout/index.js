/* eslint curly: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import TopNav from './Nav';
import Footer from './Footer';
import MobileNav from './MobileMenu';

const Layout = ({windowSize}) => (
	<div>
		{renderTopOrBottomNav(windowSize)}
		<h2>Header!</h2>
		<div style={{color: 'purple', fontWeight: '600'}}>
			Put app content here.
		</div>
		<Footer />
		{renderTopOrBottomNav(windowSize)}
	</div>
);

function renderTopOrBottomNav(windowSize) {
	if (windowSize > 400) return <TopNav />;
	else if (windowSize <= 400) return <MobileNav />;
	return null;
}

Layout.propTypes = {

};

export default Layout;