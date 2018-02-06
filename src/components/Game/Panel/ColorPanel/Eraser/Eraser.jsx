import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-icons/lib/fa/eraser'
import { identity } from 'ramda'

const Eraser = ({ mode, onClick }) =>
  mode === 'pen' ? (
    <div
      className="icon-inside circle"
      onClick={ onClick }
    >
      <Icon className="icon" />
    </div>
  ) : (
    <div
      className="icon-inside circle active"
    >
      <Icon className="icon" />
    </div>
  )
Eraser.propTypes = {
  mode: PropTypes.string.isRequired,
  onClick: PropTypes.func
}
Eraser.defaultProps = {
  onClick: identity
}

export default Eraser
