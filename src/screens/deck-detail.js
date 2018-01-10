import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { getDeck } from 'reducers/decks/action-creators'
import { getCards } from 'reducers/cards/action-creators'
import { connect } from 'react-redux'
import { Container, Header } from 'layout'
import { RaisedButton } from 'components'
import { SIZE_WIDTH_CONTAINER } from 'style/sizes'
import { green, greenSemiLight, blackDark, graySemiDark } from 'style/colors'

class DeckDetail extends PureComponent {
  componentDidMount () {
    const { getDeck, getCards, navigation } = this.props
    const { deckId } = navigation.state.params
    
    getDeck(deckId)
    getCards(deckId)
  }

  goToAddCardScreen = () => {
    const { navigation, deck } = this.props

    navigation.navigate('AddCard', { deckId: deck.id })
  }

  goToQuizScreen = () => {
  }

  backPressed = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  render () {
    const { navigation, deck, countCards } = this.props

    return (
      <Container stretch={true}>
        <Header
          title={deck.title}
          onBackPressed={this.backPressed} />
        <Container>
          <View style={styles.container}>
            <View style={styles.deckInfo}>
              <Text style={styles.titleDeck}>{deck.title}</Text>
              <Text style={styles.countCards}>{countCards} cards</Text>
            </View>
            <View style={styles.actions}>
              <RaisedButton 
                label='add card'
                onPress={this.goToAddCardScreen} />
              <RaisedButton 
                label='start quiz' 
                style={{ marginTop: 10 }}
                backgroundColor={green}
                hoverColor={greenSemiLight}
                onPress={this.goToQuizScreen} />
            </View>
          </View>
        </Container>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },

  deckInfo: {
    alignItems: 'center'
  },

  titleDeck: {
    fontSize: 30,
    fontWeight: 'bold',
    color: blackDark
  },

  countCards: {
    fontSize: 16,
    fontWeight: 'bold',
    color: graySemiDark
  },

  actions: {
    position: 'absolute',
    bottom: 0,
    width: SIZE_WIDTH_CONTAINER
  }
})

const mapStateToProps = ({ decks, cards }) => {
  return {
    deck: decks.deck,
    countCards: cards.cards.length
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getDeck, getCards }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail)
