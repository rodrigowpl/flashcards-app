import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { white, blackDark, grayDark } from 'style/colors'

const Deck = ({ deck }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{deck.title}</Text>
    <Text style={styles.countCards}>{typeof deck.cards !== 'undefined' ? deck.cards.length : 0}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    height: 120,
    borderColor: grayDark,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 10
  },

  title: {
    color: blackDark,
    fontSize: 18
  },

  countCards: {
    color: grayDark,
    fontSize: 12
  }
})

export default Deck
