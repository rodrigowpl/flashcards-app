import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import decks, { initialState } from './index'
import { 
  DECKS_AVALIABLE, 
  ADD_DECK, 
  UPDATE_DECK, 
  DECK_DETAIL,
  CARDS_DECK_AVALIABLE
} from './actions'

it('should decks be a function', () => {
  expect(decks).to.be.a('function')
})

it('should add deck', () => {
  const state = {
    decks: deepFreeze([])
  }

  const action = deepFreeze({
    type: ADD_DECK,
    payload: {
      title: 'new deck'
    }
  })

  const newState = {
    decks: [
      {
        title: 'new deck'
      }
    ]
  }

  expect(decks(state, action)).to.be.deep.equal(newState)
})

it('should update decklist and deck when add card', () => {
  const state = {
    decks: deepFreeze([{
        id: '1',
        title: 'new deck'
      }]),
    deck: deepFreeze({
      id: '1',
      title: 'new deck'
    })
  }

  const action = deepFreeze({
    type: UPDATE_DECK,
    payload: {
      id: '1',
      title: 'new deck',
      cards: [
        {
          question: 'one card',
          answer: 'one'
        }
      ]
    }
  })

  const newState = {
    decks: [
      {
        id: '1',
        title: 'new deck',
        cards: [
          {
            question: 'one card',
            answer: 'one'
          }
        ]
      }
    ],
    deck: {
      id: '1',
      title: 'new deck',
      cards: [
        {
          question: 'one card',
          answer: 'one'
        }
      ]
    }
  }

  expect(decks(state, action)).to.be.deep.equal(newState)
})

it('should get decks avaliable', () => {
  const state = {
    decks: deepFreeze([])
  }
 
  const action = deepFreeze({
    type: DECKS_AVALIABLE,
    payload: [
      {
        title: 'react',
        cards: [
          {
            id: '1',
            question: 'react card 1',
            answer: '1'
          },
          {
            id: '2',
            question: 'react card 2',
            answer: '2'
          }
        ]
      },
      {
        title: 'redux',
        cards: [
          {
            id: '3',
            question: 'redux card 1',
            answer: '1'
          },
          {
            id: '4',
            question: 'redux card 2',
            answer: '2'
          }
        ]
      }
    ]
  })

  const newState = {
    decks: [
      {
        title: 'react',
        cards: [
          {
            id: '1',
            question: 'react card 1',
            answer: '1'
          },
          {
            id: '2',
            question: 'react card 2',
            answer: '2'
          }
        ]
      },
      {
        title: 'redux',
        cards: [
          {
            id: '3',
            question: 'redux card 1',
            answer: '1'
          },
          {
            id: '4',
            question: 'redux card 2',
            answer: '2'
          }
        ]
      }
    ]
  }

  expect(decks(state, action)).to.be.deep.equal(newState)
})

it('should get deck detail', () => {
  const state = {
    deck: deepFreeze({})
  }

  const action = deepFreeze({
    type: DECK_DETAIL,
    payload: {
      id: '1',
      title: 'deck'
    }
  })

  const newState = {
    deck: {
      id: '1',
      title: 'deck'
    }
  }

  expect(decks(state, action)).to.be.deep.equal(newState)
})

it('should get cards avaliable', () => {
  const state = {
    cards: deepFreeze([])
  }

  const action = deepFreeze({
    type: CARDS_DECK_AVALIABLE,
    payload: [
      {
        id: '1',
        question: 'a',
        answer: 'b'
      },
      {
        id: '2',
        question: 'c',
        answer: 'd'
      }
    ]
  })

  const newState = {
    cards: [
      {
        id: '1',
        question: 'a',
        answer: 'b'
      },
      {
        id: '2',
        question: 'c',
        answer: 'd'
      }
    ]
  }

  expect(decks(state, action)).to.be.deep.equal(newState)
})

it('should return initialState when state is undefined', () => {
  const state = undefined
  const action = deepFreeze({})
  const newState = initialState
  expect(decks(state, action)).to.be.deep.equal(newState)
})
