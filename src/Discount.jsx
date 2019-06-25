import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export class Discount extends Component {
  render () {
    const {
      isNew,
      isVip,
      discount
    } = this.props

    return (
      <Fragment>
        {
          isNew && <h1 className='newDiscount'>newDiscount</h1>
        }
        {
          isVip && <h1 className='vipDiscount'>vipDiscount</h1>
        }
        {
          <span className='discount'>{ discount }</span>
        }
      </Fragment>
    )
  }
}

Discount.propTypes = {
  isNew: PropTypes.bool,
  isVip: PropTypes.bool,
  discount: PropTypes.string
}
