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
    },
    {
        title: 'Kibana',
        avaliableCards: 98
    },
    {
        title: 'Css',
        avaliableCards: 20
    },
    {
        title: 'Inglês',
        avaliableCards: 120
    },
    {
        title: 'Thunk',
        avaliableCards: 80
    }
  ]

  dispatch({ type: SEARCH_DECKS, payload: mockData })
}
