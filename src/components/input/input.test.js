import React from 'react'
import { shallow } from 'enzyme'
import { Input } from '.'

it('Should be render correctly', () => {
    const Component = shallow(
        <Input label='label' />
    )

    expect(Component).toMatchSnapshot()
})

