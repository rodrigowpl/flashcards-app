import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
  background-color: red;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RotatedBox = styled.View`
  transform: rotate(90deg);
`

export default class Flashcards extends PureComponent {

  render () {
    return (
      <StyledView>
        <RotatedBox>
          <Text>Hi!/</Text>
        </RotatedBox>
      </StyledView>
    )
  }
}
