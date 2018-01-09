import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getDecks } from 'reducers/decks/action-creators'
import { getCards } from 'reducers/cards/action-creators'
import { Container, Header } from 'layout'
import { RaisedButton } from 'components'
import { SIZE_WIDTH_CONTAINER } from 'style/sizes'
import { green, greenSemiLight, blackDark, graySemiDark } from 'style/colors'

class DeckDetail extends PureComponent {
  componentDidMount () {
    const { navigation, getCards } = this.props

    getCards(navigation.state.params.deckId)
  }

  goToAddCardScreen = () => {
    const { navigation } = this.props

    navigation.navigate('AddCard', { deckId: navigation.state.params.deckId })
  }

  goToQuizScreen = () => {
    const { deckId } = this.props.navigation.state.params

    console.log('deck id: ', deckId)
  }

  backPressed = () => {
    const { navigation, getDecks } = this.props

    getDecks()
    navigation.goBack()
  }

  render () {
    const { navigation, countCards } = this.props
    const { deckTitle } = navigation.state.params

    return (
      <Container stretch={true}>
        <Header
          title={deckTitle}
          onBackPressed={this.backPressed} />
        <Container>
          <View style={styles.container}>
            <View style={styles.deckInfo}>
              <Text style={styles.titleDeck}>{deckTitle}</Text>
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

const mapStateToProps = ({ cards }) => ({ countCards: cards.cards.length })
const mapDispatchToProps = dispatch => bindActionCreators({ getCards, getDecks }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail)
