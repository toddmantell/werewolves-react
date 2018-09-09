import React from 'react';
import Layout from '../../src/components/Layout';

describe('Layout Component', () => {
	it('should render the mobile nav when window size is < 400', () => {
		const shallowRenderedLayout = shallow(<Layout windowSize={350} />);

		expect(shallowRenderedLayout.find('MobileNav').length).toEqual(1);
	});

	it('should render the desktop nav when window size is > 400', () => {
		const shallowRenderedLayout = shallow(<Layout windowSize={1200} />);

		expect(shallowRenderedLayout.find('TopNav').length).toEqual(1);
	});
});