import React, { PureComponent } from 'react'
import { KeyboardAvoidingView, Text, StyleSheet, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addDeck } from 'reducers/decks/action-creators'
import { Container } from 'layout'
import { black, graySemiLight } from 'style/colors'
import { RaisedButton, Input } from 'components'
import { v1 as uuid } from 'uuid'

class AddDeck extends PureComponent {
  static navigationOptions = {
    title: 'NEW DECK'
  }

  state = {
    deckTitle: ''
  }

  onChangeDeckTitle = (deckTitle) => {
    this.setState({ deckTitle })
  }

  createDeck = () => {
    const deck = {
      id: uuid(),
      title: this.state.deckTitle
    }

    const { addDeck, navigation } = this.props

    addDeck(deck)
    navigation.goBack()
  }

  render () {
    const { deckTitle } = this.state

    return (
      <Container>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View>
            <Text style={styles.label}>What is the title of your deck?</Text>
            <Input
              value={deckTitle}
              onChangeText={this.onChangeDeckTitle}
              placeholder='Deck title' />
          </View>
          <View style={{ marginTop: 20 }}>
            <RaisedButton
              label='Create Deck'
              onPress={this.createDeck} />
          </View>
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },

  label: {
    color: black,
    height: 40,
    fontSize: 26,
    textAlign: 'center'
  }
})

const mapDispatchToProps = dispatch => bindActionCreators({ addDeck }, dispatch)

export default connect(
	null,
	mapDispatchToProps
)(AddDeck)
