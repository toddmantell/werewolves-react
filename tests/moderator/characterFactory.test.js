import {expect} from 'chai';
import {characterFactory} from '../../src/moderator/characterFactory';

describe('characterFactory', () => {
  it('should return a werewolf', () => {
    const expected = {name: 'werewolf', night: 1};

    const result = characterFactory('werewolf');

    expect(result).to.eql(expected);
  });

  it('should return an angel', () => {
    const expected = {name: 'angel', night: 0};

    const result = characterFactory('angel');

    expect(result).to.eql(expected);
  });
});