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

  it('should add numbers', function() {
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5)
  })

  it('should substract numbers', function() {
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it('should multiply numbers', function() {
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

  it('should divide numbers', function() {
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

  it('should concatenate multiple number button clicks', function() {
    calculator.numberClick(2)
    calculator.numberClick(2)
    assert.equal(calculator.runningTotal, 22)
  })

  it('should chain multiple operations together', function() {
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(10)
    calculator.operatorClick('/')
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('-')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 7)
  })

  it('should clear running total', function() {
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.clearClick();
    calculator.numberClick(10)
    assert.equal(calculator.runningTotal, 10)
  })

});
