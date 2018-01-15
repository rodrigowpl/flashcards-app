import { expect } from 'chai'
import { calcPercentRate } from '.'

describe('calcPercentRate', () => {
  it('should be a function', () => {
    expect(calcPercentRate).to.be.a('function')
  })

  it('When total = 10, rate = 5 should return 50%', () => {
    const total = 10
    const rate = 5
    const result = 50

    expect(calcPercentRate(total, rate)).to.be.equal(result)
  })

  it('When total = 10, rate = 2 should return 20%', () => {
    const total = 10
    const rate = 2
    const result = 20

    expect(calcPercentRate(total, rate)).to.be.equal(result)
  })

  it('When total = 11, rate = 5 should return 45.45%', () => {
    const total = 11
    const rate = 5
    const result = 45.45

    expect(calcPercentRate(total, rate)).to.be.equal(result)
  })
})