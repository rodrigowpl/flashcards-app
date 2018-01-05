import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import decks, { initialState } from './index'
import { 
  DECKS_AVALIABLE, 
  ADD_DECK, 
  UPDATE_DECK, 
  DELETE_DECK 
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

it('should add deck when already exists data', () => {
  const state = {
    decks: deepFreeze([
      {
        title: 'new deck'
      }
    ])
  }

  const action = deepFreeze({
    type: ADD_DECK,
    payload: {
      title: 'new deck 2'
    }
  })

  const newState = {
    decks: [
      {
        title: 'new deck 2'
      },
      {
        title: 'new deck'
      }
    ]
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
        title: 'react'
      },
      {
        title: 'redux'
      },
      {
        title: 'react-native'
      }
    ]
  })

  const newState = {
    decks: [
      {
        title: 'react'
      },
      {
        title: 'redux'
      },
      {
        title: 'react-native'
      }
    ]
  }

  expect(decks(state, action)).to.be.deep.equal(newState)
})