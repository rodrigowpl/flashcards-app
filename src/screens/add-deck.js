import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import { Container } from 'layout'

export class AddDeck extends PureComponent {
  static navigationOptions = {
    title: 'Add Deck'
  }

  render () {
    return (
      <Container>
        <Text>AddDeck screen</Text>
      </Container>
    )
  }
}
