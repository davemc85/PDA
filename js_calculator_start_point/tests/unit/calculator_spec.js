var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add two numbers', function(){
      calculator.previousTotal = 1;
      calculator.add(4);
      assert.equal(5, calculator.runningTotal);
  } )

  it('it should subtract two numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  })

  it('it should multiply two numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal);
  })

  it('it should divide two numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  })

  it('it should concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(7);
    assert.equal(17, calculator.runningTotal);
  })

  it('it should be able to chain operations together', function(){
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("-");
    calculator.numberClick(1);
    calculator.operatorClick("=")
    assert.equal(5, calculator.runningTotal);
  })

  it('it should clear running total without affecting the calculation', function(){
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("-");
    calculator.numberClick(1);
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(4, calculator.runningTotal);
  })

});
