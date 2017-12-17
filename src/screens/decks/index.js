import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import { Container } from 'layout'
import DeckList from './deck-list'
import { FlatButton } from 'components'

export class Decks extends PureComponent {
  static navigationOptions = {
    title: 'Decks'
  }

  openAddDeckScreen = () => {
    const { navigation } = this.props

    navigation.navigate('AddDeck')
  }

  render () {
    return (
      <Container>
        <DeckList />
        <FlatButton onPress={this.openAddDeckScreen} />
      </Container>
    )
  }
}
