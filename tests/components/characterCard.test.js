import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CharacterCard from '../../src/components/Character/CharacterCard';
import * as constants from '../../src/constantsAndUtilities/constants';

Enzyme.configure({adapter: new Adapter() });

describe('characterCard Tests', () => {
	const cardProps = { characterName: 'Bob', night: constants.FIRST_NIGHT_ONLY, characterImage: 'somepath/path', description: "He's a character" };

	it('should render 4 divs when mounted', () => {
		const fullyRenderedCard = Enzyme.mount(<CharacterCard {...cardProps} />);
		
		expect(fullyRenderedCard.find('div').length).toBe(4);
	});

	it('should render 2 divs and 1 img when shallow rendered', () => {
		const shallowRenderedCard = Enzyme.shallow(<CharacterCard {...cardProps} />);

		expect(shallowRenderedCard.find('div').length).toBe(2);
		expect(shallowRenderedCard.find('img').length).toBe(1);
	});
	
	it('should match the snapshot', () => {
		const renderedCard = Enzyme.render(<CharacterCard {...cardProps} />);

		expect(renderedCard).toMatchSnapshot();
	});
});