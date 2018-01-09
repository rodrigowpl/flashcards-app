import { StackNavigator } from 'react-navigation'
import AddDeck from './add-deck'
import DeckDetail from './deck-detail'
import AddCard from './add-card'
import Decks from './decks'

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
      title: navigation.state.params.deckTitle,
      header: null
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      deckId: navigation.state.params.deckId,
      header: null
    })
  }
})
