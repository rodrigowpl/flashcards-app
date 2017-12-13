import React, { PureComponent } from 'react'
import { Container, StatusBar } from './layout'
import { Tabs } from './components'

export default class Flashcards extends PureComponent {
  render () {
    return (
      <Container>
        <StatusBar />
        <Tabs />
      </Container>
    )
  }
}
