var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    var list = [1,2,3];
    it(`should return -1 when the value is not present, ${list}`, function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
    it(`should return 1 since 2 is at index 1, ${list}`, function() {
      assert.strictEqual([1, 2, 3].indexOf(2), 1);
    });
    it(`should return 0 since 2 is at index 0, ${list}`, function() {
      assert.strictEqual([1, 2, 3].indexOf(1), 0);
    });
  });
});