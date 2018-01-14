import { StackNavigator } from 'react-navigation'
import AddDeck from './add-deck'
import DeckDetail from './deck-detail'
import AddCard from './add-card'
import Decks from './decks'
import Quiz from './quiz'

export default StackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      header: null
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      header: null
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: ({ navigation }) => ({
      header: null,
      deckId: navigation.state.params.deckId
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      deckId: navigation.state.params.deckId,
      header: null
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      deckId: navigation.state.params.deckId,
      header: null
    })
  }
})
