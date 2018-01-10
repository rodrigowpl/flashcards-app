import React, { Component } from 'react'
import { StyleSheet, View, Text, AsyncStorage } from 'react-native'
import { white, blackDark, grayDark } from 'style/colors'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCards } from 'reducers/cards/action-creators'

class Deck extends Component {
  state = {
    countCards: 0
  }

  componentDidMount () {
    const { deck } = this.props

    AsyncStorage.getItem('STORAGE_DATA_CARDS_KEY', (err, data) => {
      if (data !== null) {
        const cards = JSON.parse(data)

        this.setState({
          countCards: cards.filter(card => card.deckId === deck.id).length
        })
      }
    })
  }

  render () {
    const { deck } = this.props
    const { countCards } = this.state

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

const mapDispatchToProps = dispatch => bindActionCreators({ getCards }, dispatch)

export default connect(null, mapDispatchToProps)(Deck)
