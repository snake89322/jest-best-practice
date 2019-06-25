import React from 'react'
import { Discount } from '../src/Discount'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })

describe('discount function', () => {
  it('Rule 1', async () => {
    const props = {
      isNew: true,
      isVip: true,
      discount: '60'
    }
    const wrapper = shallow(<Discount {...props}/>)

    expect(wrapper.find('.newDiscount')).toHaveLength(1)
    expect(wrapper.find('.vipDiscount')).toHaveLength(1)
    expect(wrapper.find('.discount').text()).toEqual('60')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Rule 2', async () => {
    const props = {
      isNew: true,
      isVip: false,
      discount: '40'
    }
    const wrapper = shallow(<Discount {...props}/>)

    expect(wrapper.find('.newDiscount')).toHaveLength(1)
    expect(wrapper.find('.vipDiscount')).toHaveLength(0)
    expect(wrapper.find('.discount').text()).toEqual('40')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Rule 3', async () => {
    const props = {
      isNew: false,
      isVip: true,
      discount: '20'
    }
    const wrapper = shallow(<Discount {...props}/>)

    expect(wrapper.find('.newDiscount')).toHaveLength(0)
    expect(wrapper.find('.vipDiscount')).toHaveLength(1)
    expect(wrapper.find('.discount').text()).toEqual('20')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Rule 4', async () => {
    const props = {
      isNew: false,
      isVip: false,
      discount: '0'
    }
    const wrapper = shallow(<Discount {...props}/>)

    expect(wrapper.find('.newDiscount')).toHaveLength(0)
    expect(wrapper.find('.vipDiscount')).toHaveLength(0)
    expect(wrapper.find('.discount').text()).toEqual('0')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
