import { 
  DECKS_AVALIABLE, 
  ADD_DECK,
  UPDATE_DECK,
  DECK_DETAIL,
  CARDS_DECK_AVALIABLE
} from './actions'

export const initialState = {
  decks: [],
  deck: {},
  cards: []
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
    case UPDATE_DECK:
      return {
        ...state,
        decks: updateObjectInArrayById(state.decks, action.payload),
        deck: action.payload
      }
    case DECK_DETAIL:
      return {
        ...state,
        deck: action.payload
      }
    case CARDS_DECK_AVALIABLE: {
      return {
        ...state,
        cards: action.payload
      }
    }
  }

  return state
}

const updateObjectInArrayById = (array = [], object = {}) => {
  return array.map((item, index) => {
    if (item.id !== object.id) {
      return item
    }

    return {
      ...item,
      ...object
    }
  })
}

export default decks
