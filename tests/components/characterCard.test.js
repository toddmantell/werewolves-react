import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import characterCard from '../../src/components/Character/characterCard';
import * as constants from '../../src/constantsAndUtilities/constants';

Enzyme.configure({adapter: new Adapter() });

describe('characterCard Tests', () => {
	it('should render', () => {		
		const cardProps = { name: 'Bob', night: constants.FIRST_NIGHT_ONLY, image: 'somepath/path', description: "He's a character" };

		const renderedCard = Enzyme.shallow(<characterCard {...cardProps} />);

		expect(renderedCard.find('div')).toBe(3);
	});
});