import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { black } from 'style/colors'

const Input = ({ label, customRef, ...rest }) => (
  <View>
    {!!label && <Text style={styles.label}>{label.toUpperCase()}</Text>}
    <TextInput
      underlineColorAndroid={black}
      style={styles.input}
      ref={customRef}
      {...rest}
    />
  </View>
)

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: black,
    marginLeft: 5,
    fontWeight: 'bold'
  },

  input: {
    color: black,
    height: 40,
    fontSize: 14,
    paddingLeft: 5
  }
})

Input.propTypes = {
  label: PropTypes.string,
  customRef: PropTypes.func
}

export { Input }
