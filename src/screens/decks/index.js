import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import { Container } from 'layout'
import DeckList from './deck-list'
import { FloatingButton } from 'components'

export class Decks extends PureComponent {
  static navigationOptions = {
    title: 'DECKS'
  }

  goAddDeckScreen = () => {
    const { navigation } = this.props

    navigation.navigate('AddDeck')
  }

  render () {
    return (
      <Container>
        <DeckList />
        <FloatingButton onPress={this.goAddDeckScreen} />
      </Container>
    )
  }
}
