import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { blue, white } from 'style/colors'
import { MaterialIcons  } from '@expo/vector-icons'

// const style = StyleSheet.create({
//   container: {
//     position: absolute,
//     bottom: 10,
//     right: 10,
//   },
//   circle : {
//     width: 70,
//     height: 70,
//     borderRadius: 70,
//     backgroundColor: blue,
//     alignItems: center,
//     justifyContent: center
//   }
// })

// const FlatButton = ({ title, onPress }) => (
//   <TouchableHighlight style={style.container} onPress={onPress}>
//     <View style={style.circle}>
//       <MaterialIcons name='add' size={32} color={white} />
//     </View>
//   </TouchableHighlight>
// )

const TouchableHighlightStyled = styled.TouchableHighlight`
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const ViewStyled = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  background-color: ${blue};
  align-items: center;
  justify-content: center;
`



const FlatButton = ({ title, onPress }) => (
  <TouchableHighlightStyled onPress={onPress} underlayColor={blue}>
    <ViewStyled>
      <MaterialIcons name='add' size={32} color={white} />
    </ViewStyled>
  </TouchableHighlightStyled>
)

export { FlatButton }
