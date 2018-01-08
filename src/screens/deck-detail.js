import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container } from 'layout'
import { RaisedButton } from 'components'
import { SIZE_WIDTH_CONTAINER } from 'style/sizes'
import { green, greenSemiLight, blackDark, graySemiDark } from 'style/colors'

class DeckDetail extends PureComponent {
  componentDidMount () {
    const { deckTitle, deckId } = this.props.navigation.state.params

    console.log('deck id: ', deckId)
  }

  goToAddCardScreen = () => {

  }

  goToQuizScreen = () => {

  }

  render () {
    const { navigation } = this.props
    const { deckTitle } = navigation.state.params

    return (
      <Container>
        <View style={styles.container}>
          <View style={styles.deckInfo}>
            <Text style={styles.titleDeck}>{deckTitle}</Text>
            <Text style={styles.countCards}>{0} cards</Text>
          </View>
          <View style={styles.actions}>
            <RaisedButton 
              label='add card'
              onPress={this.goToAddCardScreen} />
            <RaisedButton 
              label='start quiz' 
              style={styles.btnQuiz}
              backgroundColor={green}
              hoverColor={greenSemiLight}
              onPress={this.goToQuizScreen} />
          </View>
        </View>
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
  },

  btnQuiz: {
    marginTop: 10
  }
})

export default DeckDetail
