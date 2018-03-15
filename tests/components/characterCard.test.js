import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CharacterCard from '../../src/components/Character/CharacterCard';
import * as constants from '../../src/constantsAndUtilities/constants';

Enzyme.configure({adapter: new Adapter() });

describe('characterCard Tests', () => {
	const cardProps = { name: 'Bob', night: constants.FIRST_NIGHT_ONLY, image: 'somepath/path', description: "He's a character" };

	it('should render 4 divs', () => {
		const fullyRenderedCard = Enzyme.mount(<CharacterCard {...cardProps} />);

		expect(fullyRenderedCard.find('div').length).toBe(4);
	});
	
	it('should match the snapshot', () => {
		const fullyRenderedCard = Enzyme.mount(<CharacterCard {...cardProps} />);

		expect(fullyRenderedCard).toMatchSnapshot();
	});
});