import React from 'react'
import { StyleSheet ,TouchableHighlight, Text } from 'react-native'
import PropTypes from 'prop-types'
import { blue, white, blueSemiLight } from 'style/colors'

const RaisedButton = ({ label, onPress, backgroundColor = blue, hoverColor = blueSemiLight }) => (
  <TouchableHighlight 
    style={styles.button}
    onPress={onPress} 
    underlayColor={hoverColor}
    backgroundColor={backgroundColor}>
    <Text style={styles.text}>{label.toUpperCase()}</Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 3,
    backgroundColor: blue,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    color: white,
    fontSize: 16,
    fontWeight: 'bold'
  }
})

RaisedButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  hoverColor: PropTypes.string
}

export { RaisedButton }
