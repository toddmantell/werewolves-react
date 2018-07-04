import React from 'react';
import CharacterCard from '../../src/components/Character/characterCard';
import * as constants from '../../src/constantsAndUtilities/constants';
import toJson from 'enzyme-to-json';

describe('characterCard Tests', () => {
	const cardProps = { characterName: 'Bob', night: constants.FIRST_NIGHT_ONLY, characterImage: 'somepath/path', description: "He's a character" };

	it('should render 4 divs when mounted', () => {
		const fullyRenderedCard = mount(<CharacterCard {...cardProps} />);
		
		expect(fullyRenderedCard.find('div').length).toBe(4);
	});

	it('should render 2 divs and 1 img when shallow rendered', () => {
		const shallowRenderedCard = shallow(<CharacterCard {...cardProps} />);

		expect(shallowRenderedCard.find('div').length).toBe(2);
		expect(shallowRenderedCard.find('img').length).toBe(1);
	});
	
	it('should match the snapshot', () => {
		const renderedCard = render(<CharacterCard {...cardProps} />);

		expect(toJson(renderedCard)).toMatchSnapshot();
	});
});