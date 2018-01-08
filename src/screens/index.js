import { StackNavigator } from 'react-navigation'
import AddDeck from './add-deck'
import DeckDetail from './deck-detail'
import AddCard from './add-card'
import Decks from './decks'

export default StackNavigator({
  Decks: {
    screen: Decks
  },
  AddDeck: {
    screen: AddDeck
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.deckTitle
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      deckId: navigation.state.params.deckId
    })
  }
})
