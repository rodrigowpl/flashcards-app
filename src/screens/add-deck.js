import React, { PureComponent } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Container } from 'layout'
import { black, graySemiLight } from 'style/colors'
import { RaisedButton } from 'components'
import { saveData } from 'utils/storage'
import { DECKS_DATA } from 'utils/constants'
import { v1 as uuid } from 'uuid'

const FormStyled = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: stretch;
`

const LabelStyled = styled.Text`
  color: ${black};
  height: 40px;
  font-size: 26px;
  textAlign: center;
`

const InputStyled = styled.TextInput`
  color: ${black};
  height: 40px;
  font-size: 14px;
  margin-top: 8px;
  align-self: stretch;
  padding-left: 5px;
`

export class AddDeck extends PureComponent {
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
      title: this.state.title
    }

    saveData(DECKS_DATA, deck)
    this.goBackDecksScreen()
  }

  refreshDecks = () => {

  }

  goBackDecksScreen = () => {
    const { goBack } = this.props.navigation
    goBack()
  }

  render () {
    const { deckTitle } = this.state

    return (
      <Container>
        <FormStyled behavior="padding">
          <View>
            <LabelStyled>What is the title of your deck?</LabelStyled>
            <InputStyled
              value={deckTitle}
              onChangeText={this.onChangeDeckTitle}
              placeholder='Deck title' />
          </View>
          <View style={{ marginTop: 20 }}>
            <RaisedButton
              label='Create Deck'
              onPress={this.createDeck} />
          </View>
        </FormStyled>
      </Container>
    )
  }
}
