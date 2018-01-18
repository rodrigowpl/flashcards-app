import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addCard } from 'reducers/decks/action-creators'
import { View, Text } from 'react-native'
import { Container, Header } from 'layout'
import { RaisedButton, Input } from 'components'

class AddCard extends PureComponent {
  state = {
    question: '',
    answer: '',
    pristine: true
  }

  onChangeText = (name, value) => {
    this.setState({
      [name]: value
    }, () => {
      this.setState(state => ({
        pristine: state.question === '' || state.answer === ''
      }))
    })
  }

  createCard = () => {
    const { addCard, navigation } = this.props
    const { deckId } = navigation.state.params
    const { question, answer } = this.state

    addCard(deckId, question, answer)
    
    navigation.goBack()
  }

  backPressed = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  render () {
    const { pristine } = this.state

    return (
      <Container stretch={true}>
        <Header
          title='new card'
          onBackPressed={this.backPressed} />
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
              disable={pristine}
              style={{ marginTop: 10 }}
              onPress={this.createCard} />
          </Container>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addCard }, dispatch)

export default connect(null, mapDispatchToProps)(AddCard)
