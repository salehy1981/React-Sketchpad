import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-icons/lib/ti/zoom-out-outline'

const ZoomIn = ({ onClick }) => {
  return (
    <Icon
      className="zoom-icon"
      onClick={ onClick }
    />
  )
}
ZoomIn.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ZoomIn
