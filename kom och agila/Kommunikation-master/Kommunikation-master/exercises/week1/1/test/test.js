const assert = require('assert');
const script = require('../script.js');

describe('Sum', function() {
  it('Works', function() {
    assert.equal(script.sum(1, 2), 3);
    assert.equal(script.sum(7, 2), 9);
  });
});

// Add multiply test here
describe('Multiply',function(){
  it('BRA JOBBAT Samir', function() {
    assert.equal(script.multiply(2,3),6);
  });
});


describe('Subtract',function(){
  it('Genius Samir', function() {
    assert.equal(script.subtract(10,5),5);
  });
});
