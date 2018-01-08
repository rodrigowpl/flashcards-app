import React, { PureComponent } from 'react'
import { Container, StatusBar } from 'layout'
import MainScreenNavigation from 'screens'

export default class App extends PureComponent {
  render () {
    return (
      <Container stretch={true}>
        <StatusBar />
        <MainScreenNavigation />
      </Container>
    )
  }
}
