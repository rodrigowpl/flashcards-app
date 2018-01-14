import React, { PureComponent } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCards } from 'reducers/decks/action-creators'
import { Container, Header } from 'layout'
import { RaisedButton } from 'components'
import { SIZE_WIDTH_CONTAINER } from 'style/sizes'
import { blackDark, green, greenSemiLight, red, redSemiLight } from 'style/colors'

class Quiz extends PureComponent {
  state = {
    pendingCard: {},
    cardIndex: 0
  }

  async componentDidMount () {
    const { getCards, navigation } = this.props

    await getCards(navigation.state.params.deckId)
    this.showNextCard()
  }

  markCardCorret = () => {
    this.showNextCard()
  }

  markCardIncorret = () => {
    this.showNextCard()
  }

  showNextCard = () => {
    const { cards } = this.props
    const { cardIndex } = this.state

    this.setState({
      pendingCard: cards[cardIndex]
    })

    this.upCardIndex()
  }

  upCardIndex = () => {
    this.setState(state => ({
      cardIndex: state.cardIndex + 1
    }))
  }

  backPressed = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  render () {
    const { pendingCard } = this.state
    const quizConcluded = typeof pendingCard === 'undefined'

    return (
      <Container stretch={true}>
        <Header
          title='Quiz'
          onBackPressed={this.backPressed} />
        <Container>
          <View style={styles.container}>
            <View style={styles.cardInfo}>
             {quizConcluded ? 
              <Text style={styles.finishMessage}>Congratulaions! You've finished this quiz:D</Text> :
              <Text style={styles.questionCard}>{pendingCard.question}</Text>
             }
              
            </View>
            <View style={styles.actions}>
              <RaisedButton 
                label='correct'
                backgroundColor={green}
                hoverColor={greenSemiLight}
                onPress={this.markCardCorret} />
              <RaisedButton 
                label='incorrect' 
                style={{ marginTop: 10 }}
                backgroundColor={red}
                hoverColor={redSemiLight}
                onPress={this.markCardIncorret} />
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

  cardInfo: {
    alignItems: 'center'
  },

  questionCard: {
    fontSize: 30,
    fontWeight: 'bold',
    color: blackDark
  },

  finishMessage: {
    fontSize: 18,
    color: blackDark
  },

  actions: {
    position: 'absolute',
    bottom: 0,
    width: SIZE_WIDTH_CONTAINER
  }
})

const mapStateToProps = ({ decks }) => decks
const mapDispatchToprops = dispatch => bindActionCreators({ getCards }, dispatch)

export default connect(mapStateToProps, mapDispatchToprops)(Quiz)
