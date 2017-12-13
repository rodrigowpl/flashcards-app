import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Decks, AddDeck } from '../screens'

export const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigatorOptions: {
      tabBarLabel: 'decks'
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigatorOptions: {
      tabBarLabel: 'new deck'
    }
  }
})
