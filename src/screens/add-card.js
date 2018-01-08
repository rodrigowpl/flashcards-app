import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container } from 'layout'
import { RaisedButton, Input } from 'components'

class AddCard extends PureComponent {
  state = {
    question: '',
    answer: ''
  }

  onChangeText = (name, value) => {
    this.setState({ [name]: value })
  }

  createCard = () => {
    const { navigation } = this.props
    const { deckId } = navigation.state.params
    const { question, answer } = this.state

    console.log(deckId, question, answer)
  }

  render () {
    return (
      <Container>
        <Input 
          label='Question'
          onChangeText={(value) => this.onChangeText('question', value)}
          placeholder='question of card'
          returnKeyType='next'
          onSubmitEditing={(e) => { this.answerRef.focus() }} />
        <Input 
          label='Answser'
          customRef={node => this.answerRef = node}
          onChangeText={(value) => this.onChangeText('answer', value)}
          placeholder='answer of card'
          returnKeyType='done'
          onSubmitEditing={this.createCard} />

        <RaisedButton
          label='Create card'
          style={{ marginTop: 10 }}
          onPress={this.createCard} />
      </Container>
    )
  }
}

const styles = StyleSheet.create({

})

export default AddCard
