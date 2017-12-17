import React, { PureComponent } from 'react'
import { Container, StatusBar } from 'layout'
import { MainNavigation } from 'components'

export default class App extends PureComponent {
  render () {
    return (
      <Container>
        <StatusBar />
        <MainNavigation />
      </Container>
    )
  }
}
