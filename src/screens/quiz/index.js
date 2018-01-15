import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCards } from 'reducers/decks/action-creators'
import { Container, Header } from 'layout'
import { RaisedButton } from 'components'
import { SIZE_WIDTH_CONTAINER } from 'style/sizes'
import { blackDark, green, greenSemiLight, red, redSemiLight, greenDark, redDark, grayLight } from 'style/colors'
import { cancelLocalNotification } from 'utils/notification'

export const calcPercentRate = (total, rate) => {
  const value = rate * 100 / total
  return Math.round(value * 100) / 100
}

class Quiz extends PureComponent {
  state = {
    pendingCard: {},
    cardIndex: 0,
    corretCount: 0,
    showAnswer: false,
    quizConcluded: false
  }

  async componentDidMount () {
    const { getCards, navigation } = this.props

    await getCards(navigation.state.params.deckId)
    this.showNextCard()
  }

  markCardCorret = () => {
    this.setState(state => ({
      corretCount: state.corretCount + 1
    }))

    this.showNextCard()
  }

  markCardIncorret = () => {
    this.showNextCard()
  }

  showNextCard = () => {
    const { cardIndex } = this.state
    const { cards } = this.props

    this.setState({
      pendingCard: cards[cardIndex],
      showAnswer: false
    })

    const isLastCard = cards.length === cardIndex
    if (isLastCard) {
      this.finishQuiz()
    } else {
      this.upCardIndex()
    }
  }

  finishQuiz = () => {
    this.setState({
      quizConcluded: true
    })

    cancelLocalNotification()
  }

  upCardIndex = () => {
    this.setState(state => ({
      cardIndex: state.cardIndex + 1
    }))
  }

  toggleAnswer = () => {
    this.setState(state => ({
      showAnswer: !state.showAnswer
    }))
  }

  backPressed = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  render () {
    const { pendingCard, cardIndex, corretCount, showAnswer, quizConcluded } = this.state
    const { cards } = this.props
    const successRate = calcPercentRate(cards.length, corretCount)

    return (
      <Container stretch={true}>
        <Header
          title='Quiz'
          onBackPressed={this.backPressed} />
        <Container>
          <View style={styles.container}>
            <Text style={styles.countIndex}>{cardIndex} / {cards.length}</Text>
            <View style={styles.alignCenter}>
             {quizConcluded ? 
              <View style={styles.finishFeedback}>
                <Text style={styles.congratzMessage}>Congratulaions! You've finished this quiz :)</Text>
                <Text style={styles.rateLabel}>Success rate:</Text>
                <Text style={styles.rateValue}>{successRate}%</Text>
              </View> :
              <View style={styles.alignCenter}>
                <Text style={styles.quiz}>{showAnswer ? pendingCard.answer : pendingCard.question}</Text>
                <RaisedButton 
                  label={showAnswer ? 'Question' : 'Answer'}
                  backgroundColor='transparent'
                  hoverColor='transparent'
                  textColor={redDark}
                  onPress={this.toggleAnswer}
                  style={{ width: SIZE_WIDTH_CONTAINER }} />
              </View>
             }
            </View>
            {!quizConcluded && showAnswer && 
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
            }
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

  countIndex: {
    position: 'absolute',
    top: 0
  },

  alignCenter: {
    alignItems: 'center'
  },

  toggleAnswer: {
    fontSize: 16,
    color: redDark,
    fontWeight: 'bold'
  },

  quiz: {
    fontSize: 30,
    fontWeight: 'bold',
    color: blackDark,
    textAlign: 'center'
  },

  finishFeedback: {
    alignItems: 'center'
  },

  congratzMessage: {
    fontSize: 18,
    color: blackDark
  },

  rateLabel: {
    marginTop: 30,
    fontSize: 22,
    color: blackDark
  },

  rateValue: {
    fontSize: 28,
    color: greenDark,
    fontWeight: 'bold'
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
