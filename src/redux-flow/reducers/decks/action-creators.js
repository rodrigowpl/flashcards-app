import { DECKS_AVALIABLE, ADD_DECK, UPDATE_DECK, DELETE_DECK } from './actions'
import { AsyncStorage } from 'react-native'

const STORAGE_DATA_KEY = 'STORAGE_DATA_KEY'

export const addDeck = deck => dispatch => {
  AsyncStorage.getItem(STORAGE_DATA_KEY, (err, data) => {
    const decks = data !== null ? JSON.parse(data) : []
    decks.unshift(deck)

    AsyncStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(decks), () => {
      dispatch({ type: ADD_DECK, payload: deck })
    })
  })
}

export const getDecks = () => dispatch => {
  AsyncStorage.getItem(STORAGE_DATA_KEY, (err, decks) => {
    if (decks !== null) {
      dispatch({ type: DECKS_AVALIABLE,  payload: JSON.parse(decks)})
    }
  })
}
