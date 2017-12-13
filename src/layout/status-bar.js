import React from 'react'
import { StatusBar as NativeStatusBar, View } from 'react-native'
import { Constants } from 'expo'

export const StatusBar = () => (
  <View style={{ backgroundColor: 'black', height: Constants.statusBarHeight }}>
    <NativeStatusBar
      translucent
      backgroundColor='black'
      barStyle='light-content' />
  </View>
)
