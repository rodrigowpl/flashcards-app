import React from 'react'
import { shallow } from 'enzyme'
import { RaisedButton } from '.'

it('Should be render correctly', () => {
    const Component = shallow(
        <RaisedButton 
            label='button'
            onPress={jest.fn} />
    )

    expect(Component).toMatchSnapshot()
})

it('Should be call onPress when button is clicked', () => {
    const onPress = jest.fn()

    const component = shallow(
        <RaisedButton
            label='button'
            onPress={onPress} />
    )

    const render = component.find('TouchableHighlight')
    render.simulate('press')

    expect(onPress).toHaveBeenCalledTimes(1)
})

it('Should not be call onPress when button is clicked if disable', () => {
    const onPress = jest.fn()

    const component = shallow(
        <RaisedButton
            label='button'
            onPress={onPress}
            disable />
    )

    const render = component.find('TouchableHighlight')
    render.simulate('press')

    expect(onPress).toHaveBeenCalledTimes(0)
})
