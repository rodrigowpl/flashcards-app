import React from 'react'
import { View, StyleSheet } from 'react-native'
import { graySemiLight } from 'style/colors'

const Container = ({ children, stretch = false }) => (
  <View style={styles(stretch).container}>
    {children}
  </View>
)

const styles = (stretch) => (
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: graySemiLight,
      padding: stretch ? 0 : 10
    }
  })
)

export { Container }
