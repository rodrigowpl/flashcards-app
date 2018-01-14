import { 
  DECKS_AVALIABLE, 
  ADD_DECK, 
  UPDATE_DECK, 
  DECK_DETAIL,
  CARDS_DECK_AVALIABLE
} from './actions'
import { AsyncStorage } from 'react-native'
import { v1 as uuid } from 'uuid'

const STORAGE_DATA_DECKS_KEY = 'STORAGE_DATA_DECKS_KEY'

export const addDeck = deck => dispatch => {
  AsyncStorage.getItem(STORAGE_DATA_DECKS_KEY, (err, data) => {
    const decks = data !== null ? JSON.parse(data) : []
    decks.unshift(deck)

    AsyncStorage.setItem(STORAGE_DATA_DECKS_KEY, JSON.stringify(decks), () => {
      dispatch({ type: ADD_DECK, payload: deck })
    })
  })
}

export const getDeck = (deckId) => dispatch => {
  AsyncStorage.getItem(STORAGE_DATA_DECKS_KEY, (err, data) => {
    const decks = JSON.parse(data)
    const deck =  decks.find(deck => deck.id === deckId)
    
    dispatch({ type: DECK_DETAIL, payload: decks.find(deck => deck.id === deckId) })
  })
}

export const addCard = (deckId, question, answer) => dispatch => {
  const card = {id: uuid(), question, answer}

  AsyncStorage.getItem(STORAGE_DATA_DECKS_KEY, (err, data) => {
    let decks = JSON.parse(data)
    let deck = decks.find(d => d.id === deckId)

    if (typeof deck.cards !== 'undefined') {
      deck.cards.push(card)
    } else {
      deck.cards = [card]
    }
   
    AsyncStorage.setItem(STORAGE_DATA_DECKS_KEY, JSON.stringify(decks), () => {
      dispatch({ type: UPDATE_DECK, payload: deck })
    })
  })
}

export const getDecks = () => dispatch => {
  AsyncStorage.getItem(STORAGE_DATA_DECKS_KEY, (err, decks) => {
    if (decks !== null) {
      dispatch({ type: DECKS_AVALIABLE,  payload: JSON.parse(decks)})
    }
  })
}

export const getCards = (deckId) => dispatch => {
  return AsyncStorage.getItem(STORAGE_DATA_DECKS_KEY, (err, decks) => {
    const deck = JSON.parse(decks).find(d => d.id === deckId)
    const cards = deck.cards || []
    
    dispatch({ type: CARDS_DECK_AVALIABLE, payload: cards})
  })
}
