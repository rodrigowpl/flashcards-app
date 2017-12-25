import { SEARCH_DECKS } from './actions'
import { getData } from 'utils/storage'
import { DECKS_DATA } from 'utils/constants'

export const searchDecks = () => dispatch => {
  getData(DECKS_DATA)
    .then(data => {
      console.log(data)
      dispatch({ type: SEARCH_DECKS, payload: data })
    })
}
