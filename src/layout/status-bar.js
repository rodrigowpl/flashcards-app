import React from 'react'
import { StatusBar as NativeStatusBar, View } from 'react-native'
import { blackDark } from 'style/colors'
import { Constants } from 'expo'

export const StatusBar = () => (
  <View style={{ backgroundColor: blackDark, height: Constants.statusBarHeight }}>
    <NativeStatusBar
      translucent
      backgroundColor={blackDark}
      barStyle='light-content' />
  </View>
)
