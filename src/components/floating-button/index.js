import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import { blue, white, blueSemiLight } from 'style/colors'
import { MaterialIcons  } from '@expo/vector-icons'

const FloatingButton = ({ onPress }) => (
  <TouchableHighlight style={styles.button} onPress={onPress} underlayColor={blueSemiLight}>
    <MaterialIcons name='add' size={32} color={white} />
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: blue,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

FloatingButton.propTypes = {
  onPress: PropTypes.func.isRequired
}

export { FloatingButton }
