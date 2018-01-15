import React, { PureComponent } from 'react'
import { Container, StatusBar } from 'layout'
import MainScreenNavigation from 'screens'
import { setLocalNotification } from 'utils/notification'

export default class App extends PureComponent {
  componentDidMount () {
    setLocalNotification()
  }

  render () {
    return (
      <Container stretch={true}>
        <StatusBar />
        <MainScreenNavigation />
      </Container>
    )
  }
}
