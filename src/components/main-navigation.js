import { StackNavigator } from 'react-navigation'
import { Decks, AddDeck, DeckDetail } from 'screens'

export const MainNavigation = StackNavigator({
  Decks: {
    screen: Decks
  },
  AddDeck: {
    screen: AddDeck
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title
    })
  }
})
