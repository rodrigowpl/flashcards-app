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

  navigateToDeckDetail = (deck) => {
		const { navigation } = this.props

		navigation.navigate('DeckDetail', { deckTitle: deck.title, deckId: deck.id })
	}

  render () {
    return (
      <Container>
        <DeckList onClickCard={this.navigateToDeckDetail} />
        <FloatingButton onPress={this.goAddDeckScreen} />
      </Container>
    )
  }
}
