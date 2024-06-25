import {Vector} from '../src/Vector.js';

describe('Vector.js', () => {

  it('calculates length', () => {
    const vector = new Vector(3, 4);
    expect(vector.length()).toBe(5);
  });

});