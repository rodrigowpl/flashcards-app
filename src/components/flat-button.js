import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { blue, white } from 'style/colors'
import { MaterialIcons  } from '@expo/vector-icons'

const TouchableHighlightStyled = styled.TouchableHighlight`
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const ViewStyled = styled.View`
  width: 70px;
  height: 70px;
  borderRadius: 70px;
  backgroundColor: ${blue};
  align-items: center;
  justify-content: center;
`

const FlatButton = ({ title, onPress }) => (
  <TouchableHighlightStyled onPress={onPress}>
    <ViewStyled>
      <MaterialIcons name='add' size={32} color={white} />
    </ViewStyled>
  </TouchableHighlightStyled>
)

export { FlatButton }
