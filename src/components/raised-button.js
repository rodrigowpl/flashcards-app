import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { blue, white, blueSemiLight } from 'style/colors'

const RaisedButtonStyled = styled.TouchableHighlight`
  height: 50px;
  border-radius: 3px;
  background-color: ${blue};
  justify-content: center;
  align-items: center;
`

const LabelStyled = styled.Text`
  color: ${white};
  font-size: 16px;
  font-weight: bold;
`

const RaisedButton = ({ label, onPress, backgroundColor = blue, hoverColor = blueSemiLight }) => (
  <RaisedButtonStyled 
    onPress={onPress} 
    underlayColor={hoverColor}
    backgroundColor={backgroundColor}>
    <LabelStyled>{label.toUpperCase()}</LabelStyled>
  </RaisedButtonStyled>
)

RaisedButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  hoverColor: PropTypes.string
}

export { RaisedButton }
