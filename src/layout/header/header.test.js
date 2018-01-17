import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '.'

it('Should be render TouchableOpacity when passed onBackPressed', () => {
    const component = shallow(
        <Header onBackPressed={jest.fn} />
    )

    const render = component.find('TouchableOpacity')

    expect(render.length).toBe(1)
})
