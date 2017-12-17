import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { FlatButton } from '../../src/components'

const stories = storiesOf('FlatButton', module)

stories.add('default', () => (
  <FlatButton />
))
