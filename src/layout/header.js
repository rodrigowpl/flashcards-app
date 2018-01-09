import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { white, gray, blackDark } from 'style/colors'

const Header = ({ title, onBackPressed }) => (  
  <View style={styles.container}>
    <View style={styles.content}>
      {onBackPressed && (
        <TouchableOpacity style={styles.icon} onPress={onBackPressed}>
          <Feather name='arrow-left' size={26} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title.toUpperCase()}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: white,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: gray
  },

  content: {
    flexDirection: 'row',
    paddingLeft: 15
  },

  icon: {
    marginTop: 3,
    marginRight: 20
  },

  title: {
    color: blackDark,
    fontSize: 22,
    fontWeight: 'bold'
  }
})

Header.propTypes = {
  title: PropTypes.string,
  onBackPressed: PropTypes.func
}

export { Header }
