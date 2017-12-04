import { expect } from 'chai';
import { characterFactory } from '../../src/components/moderator/characterFactory';

describe('characterFactory', () => {
	it('should return a werewolf', () => {
		const expected = { name: 'werewolf', night: 1, order: 100 };

		const result = characterFactory('werewolf');

		expect(result).to.eql(expected);
	});

	it('should return an angel', () => {
		const expected = { name: 'angel', night: 0, order: 150 };

		const result = characterFactory('angel');

		expect(result).to.eql(expected);
	});

	it('should return false by default', () => {
		const result = characterFactory({});

		expect(result).to.be.false;
	});
});