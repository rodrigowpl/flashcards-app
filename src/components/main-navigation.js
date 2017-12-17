import { StackNavigator } from 'react-navigation'
import { Decks, AddDeck } from 'screens'

export const MainNavigation = StackNavigator({
  Decks: {
    screen: Decks
  },
  AddDeck: {
    screen: AddDeck
  }
})
