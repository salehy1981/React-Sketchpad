import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-icons/lib/fa/pencil'
import { identity } from 'ramda'

const Pen = ({ mode, onClick, color }) => {
  const style = {
    color
  }

  return mode === 'pen' ? (
    <div
      className="icon-inside circle active"
    >
      <Icon
        className="icon"
        style={ style }
      />
    </div>
  ) : (
    <div
      className="icon-inside circle"
      onClick={ onClick }
    >
      <Icon
        className="icon"
        style={ style }
      />
    </div>
  )
}
Pen.propTypes = {
  mode: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string
}
Pen.defaultProps = {
  onClick: identity,
  color: '#1a237e'
}

export default Pen
