import {
  ADD_CARD,
  CARDS_AVALIABLE
} from './actions'

export const initialState = {
  cards: []
}

const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      let cards = [...state.cards]
      cards.push(action.payload)

      return {
        ...state,
        cards
      }
    case CARDS_AVALIABLE:
      return {
        ...state,
        cards: action.payload
      }  
  }

  return state
}

export default cards
