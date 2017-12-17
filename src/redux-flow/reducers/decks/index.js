import { SEARCH_DECKS } from './actions'

export const initialState = {
  decks: []
}

const decks = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DECKS:
      return {
        ...state,
        decks: action.payload
      }
  }

  return state
}

export default decks
