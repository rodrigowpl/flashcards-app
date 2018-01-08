import { 
  DECKS_AVALIABLE, 
  ADD_DECK
} from './actions'

export const initialState = {
  decks: []
}

const decks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DECK: 
      let decks = [...state.decks]
      decks.unshift(action.payload)
      return {
        ...state,
        decks
      }
    case DECKS_AVALIABLE:
      return {
        ...state,
        decks: action.payload
      }
  }

  return state
}

export default decks
