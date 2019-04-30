const assert = require('assert');
const Counter = require('../counter');

describe('Counter', function() {
  let counter = new Counter();

/*it('works',function() {
  assert.ok(counter.getCount() === 0);
  counter.increase() === 1;
  assert.ok(counter.getCount() === 1);
  counter.reset() === 0;
  counter.decrease() === -1;
  assert.ok(counter.getCount()=== -1)
})*/
  // Write tests here

  beforeEach(function(){
    counter.reset();// count kommer reseta efter varje test. den kommer då va 0 varje gång
  });

  it("increase", function(){
    counter.increase();
    assert.equal(counter.getCount(), 1);
  });

  it("decrease", function(){
    counter.decrease();
    assert.equal(counter.getCount(), -1)
  });
});
