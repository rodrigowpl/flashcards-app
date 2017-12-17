import React from 'react'
import { View } from 'react-native'
import { graySemiLight } from 'style/colors'

const Container = ({ children }) => (
  <View style={{ flex: 1, backgroundColor: graySemiLight }}>
    {children}
  </View>
)

export { Container }
