import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class DeckDetail extends PureComponent {
  static navigationOptions = {
    title: 'deck detail'
  }  

  render () {
    return (
      <View>
        <Text>Deckdetail</Text>
      </View>
    )
  }
}

export default DeckDetail
