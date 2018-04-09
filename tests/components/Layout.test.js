import React from 'react';
import Layout from '../../src/components/Layout';
// do a global enzyme setup

describe('Name of the group', () => {
	it('should render the bottom nav when window size is < 400', () => {
		const shallowRenderedLayout = shallow(<Layout windowSize={350} />);

		expect(shallowRenderedLayout.find('MobileNav'));
	});
});