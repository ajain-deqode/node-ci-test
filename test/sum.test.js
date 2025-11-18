import assert from 'node:assert/strict';
import { sum } from '../src/sum.js';

describe('sum', () => {
  it('adds 2 + 3 = 5', () => {
    assert.equal(sum(2, 3), 5);
  });
});
