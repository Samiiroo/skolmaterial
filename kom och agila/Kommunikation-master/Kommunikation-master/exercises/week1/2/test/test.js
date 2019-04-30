const assert = require('assert');
const script = require('../script.js');
const getRandomNumberInIntervalAsPromise = script.getRandomNumberInIntervalAsPromise;
const getRandomNumberInIntervalAsCallback = script.getRandomNumberInIntervalAsCallback;

/* Add test here */

  describe('Promise', function() {
    it('my Promise',function(){
    return getRandomNumberInIntervalAsPromise(3,7)
    .then(function(data) {
      assert.ok(data >= 3 && data <=7);
    });
  });
});
describe('Callback',function(){
  it('my test', function(done) {
    getRandomNumberInIntervalAsCallback(2,6, function(data) {
      assert.ok(data);
      done();
      });
    });
  });

  describe('SecondCallBack',function() {
    it('TESTET',function(done){
      getRandomNumberInIntervalAsCallback(3,7,function(data){
        assert.ok(data >= 3 && data <=7);
        done()
      })
    })
  })
