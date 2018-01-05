import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { black } from 'style/colors'

const Input = ({ label, placeholder, value, onChangeText }) => (
  <View>
    {!!label && <Text style={styles.label}>{label.toUpperCase()}</Text>}
    <TextInput
      underlineColorAndroid={black}
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
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

export { Input }
