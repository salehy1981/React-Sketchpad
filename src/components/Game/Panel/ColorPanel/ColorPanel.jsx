import React from 'react'
import PropTypes from 'prop-types'
import Pen from './Pen'
import Eraser from './Eraser'
import Picker from './Picker'

import './style.css'

const style = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  margin: '30px 10px'
}

const ColorPanel = ({
  mode,
  color,
  onSetPen,
  onSetEraser,
  onChangeColor
}) => (
  <div style={ style }>
    <Pen
      mode={ mode }
      color={ color }
      onClick={ onSetPen }
    />
    <Picker
      color={ color }
      onChange={ onChangeColor }
    />
    <Eraser
      mode={ mode }
      onClick={ onSetEraser }
    />
  </div>
)
ColorPanel.propTypes = {
  mode: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onSetPen: PropTypes.func.isRequired,
  onSetEraser: PropTypes.func.isRequired,
  onChangeColor: PropTypes.func.isRequired
}

export default ColorPanel
