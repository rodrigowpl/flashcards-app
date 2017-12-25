import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { blue, white, blueSemiLight } from 'style/colors'
import { MaterialIcons  } from '@expo/vector-icons'

const FloatingButtonStyled = styled.TouchableHighlight`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 70px;
  height: 70px;
  border-radius: 70px;
  background-color: ${blue};
  align-items: center;
  justify-content: center;
`

const FloatingButton = ({ onPress }) => (
  <FloatingButtonStyled onPress={onPress} underlayColor={blueSemiLight}>
    <MaterialIcons name='add' size={32} color={white} />
  </FloatingButtonStyled>
)

FloatingButton.propTypes = {
  onPress: PropTypes.func.isRequired
}

export { FloatingButton }
