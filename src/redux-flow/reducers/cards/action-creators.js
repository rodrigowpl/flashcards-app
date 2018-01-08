import { AsyncStorage } from 'react-native'
import { ADD_CARD, CARDS_AVALIABLE } from './actions'

const STORAGE_DATA_CARDS_KEY = 'STORAGE_DATA_CARDS_KEY'

export const addCard = (deckId, question, answer) => dispatch => {
  const card = {deckId, question, answer}

  AsyncStorage.getItem(STORAGE_DATA_CARDS_KEY, (err, data) => {
    const cards = data !== null ? JSON.parse(data) : []
    cards.push(card)

    AsyncStorage.setItem(STORAGE_DATA_CARDS_KEY, JSON.stringify(cards), () => {
      dispatch({ type: ADD_CARD, payload: card })
    })
  })
}

export const getCards = (deckId) => dispatch => {
  AsyncStorage.getItem(STORAGE_DATA_CARDS_KEY, (err, cards) => {
    if (cards !== null) {
      const allCards = JSON.parse(cards)
      dispatch({ type: CARDS_AVALIABLE,  payload: allCards.filter(card => card.deckId === deckId)})
    }
  })
}
