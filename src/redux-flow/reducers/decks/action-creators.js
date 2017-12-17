import { SEARCH_DECKS } from './actions'

export const searchDecks = () => dispatch => {
  const mockData = [
    {
        title: 'React',
        avaliableCards: 5
    },
    {
        title: 'Redux',
        avaliableCards: 15
    },
    {
        title: 'Elasticsearch',
        avaliableCards: 8
    }
  ]

  dispatch({ type: SEARCH_DECKS, payload: mockData })
}
