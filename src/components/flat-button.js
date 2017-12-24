import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { blue, white } from 'style/colors'
import { MaterialIcons  } from '@expo/vector-icons'

const FlatButtonStyled = styled.TouchableHighlight`
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const BubbleViewStyled = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  background-color: ${blue};
  align-items: center;
  justify-content: center;
`

const FlatButton = ({ title, onPress }) => (
  <FlatButtonStyled onPress={onPress} underlayColor={blue}>
    <BubbleViewStyled>
      <MaterialIcons name='add' size={32} color={white} />
    </BubbleViewStyled>
  </FlatButtonStyled>
)

export { FlatButton }
