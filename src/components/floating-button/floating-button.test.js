import React from 'react'
import { shallow } from 'enzyme'
import { FloatingButton } from '.'

it('Should be render correctly', () => {
    const Component = shallow(
        <FloatingButton onPress={jest.fn} />
    )

    expect(Component).toMatchSnapshot()
})

it('Should be call onPress when button is clicked', () => {
    const onPress = jest.fn()

    const component = shallow(
        <FloatingButton onPress={onPress} />
    )

    const render = component.find('TouchableHighlight')
    render.simulate('press')

    expect(onPress).toHaveBeenCalledTimes(1)
})
