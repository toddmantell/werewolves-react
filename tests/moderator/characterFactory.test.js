import { expect } from 'chai';
import { characterFactory } from '../../src/characterGenerator/characterFactory';

describe('characterFactory', () => {
	it('should return a werewolf when given werewolf as the characterName', () => {
		const expected = { name: 'werewolf', night: 1, order: 100 };

		const result = characterFactory('werewolf');

		expect(result).to.eql(expected);
	});

	it('should return an angel when given angel as the characterName', () => {
		const expected = { name: 'angel', night: 0, order: 150 };

		const result = characterFactory('angel');

		expect(result).to.eql(expected);
	});

	it('should return false by default when given no characterName', () => {
		const result = characterFactory({});

		expect(result).to.be.false;
	});
});