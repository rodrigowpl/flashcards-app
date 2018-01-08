import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import cards, { initialState } from './index'
import { ADD_CARD, CARDS_AVALIABLE } from './actions'

it('should cards be a function', () => {
  expect(cards).to.be.a('function')
})

it('should add card', () => {
  const state = {
    cards: deepFreeze([])
  }

  const action = deepFreeze({
    type: ADD_CARD,
    payload: {
      deckId: '1234',
      question: 'first card?',
      answer: 'yes'
    }
  })

  const newState = {
    cards: [
      {
        deckId: '1234',
        question: 'first card?',
        answer: 'yes'
      }
    ]
  }

  expect(cards(state, action)).to.be.deep.equal(newState)
})

it('should add card when already exists data', () => {
  const state = {
    cards: deepFreeze([
      {
        deckId: '1234',
        question: 'first card?',
        answer: 'yes'
      }
    ])
  }

  const action = deepFreeze({
    type: ADD_CARD,
    payload: {
      deckId: '1234',
      question: 'first card, sure?',
      answer: 'no'
    }
  })

  const newState = {
    cards: [
      {
        deckId: '1234',
        question: 'first card?',
        answer: 'yes'
      },
      {
        deckId: '1234',
        question: 'first card, sure?',
        answer: 'no'
      }
    ]
  }

  expect(cards(state, action)).to.be.deep.equal(newState)
})

it('should get cards avaliable', () => {
  const state = {
    cards: deepFreeze([])
  }
 
  const action = deepFreeze({
    type: CARDS_AVALIABLE,
    payload: [
      {
        deckId: '1234',
        question: 'first card?',
        answer: 'yes'
      },
      {
        deckId: '1234',
        question: 'first card, sure?',
        answer: 'no'
      }
    ]
  })

  const newState = {
    cards: [
      {
        deckId: '1234',
        question: 'first card?',
        answer: 'yes'
      },
      {
        deckId: '1234',
        question: 'first card, sure?',
        answer: 'no'
      }
    ]
  }

  expect(cards(state, action)).to.be.deep.equal(newState)
})