import React, { Component } from 'react'
import { StyleSheet, View, Text, AsyncStorage } from 'react-native'
import { white, blackDark, grayDark } from 'style/colors'

class Deck extends Component {
  state = {
    countCards: 0
  }

  componentDidMount () {
    const { deck } = this.props

    console.log('deck: ', 'componentDidMount')

    AsyncStorage.getItem('STORAGE_DATA_CARDS_KEY', (err, data) => {
      if (data != null) {
        const cards = JSON.parse(data).filter(card => card.deckId === deck.id)
        
        this.setState({
          countCards: cards.length
        })
      }
    })
  }

  render () {
    const { countCards } = this.state
    const { deck } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.countCards}>{countCards}</Text>
      </View>
    )
  }
}

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
