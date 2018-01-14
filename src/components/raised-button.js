import React, { Component } from 'react'
import { StyleSheet ,TouchableHighlight, Text } from 'react-native'
import PropTypes from 'prop-types'
import { blue, white, blueSemiLight, gray } from 'style/colors'

class RaisedButton extends Component {
  onPress = () => {
    const { onPress, disable  } = this.props
    if (!disable) {
      onPress()
    }
  }

  render () {
    const { label, backgroundColor = blue, hoverColor = blueSemiLight, style, disable } = this.props

    return (
      <TouchableHighlight 
        style={[styles.button, { backgroundColor: disable ? gray : backgroundColor } ,style]}
        onPress={this.onPress} 
        underlayColor={disable ? gray : hoverColor}>
        <Text style={styles.text}>{label.toUpperCase()}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 3,
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
  hoverColor: PropTypes.string,
  style: PropTypes.object,
  disable: PropTypes.bool
}

export { RaisedButton }
