import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Pattern from './Pattern'
import Canvas from './Canvas'

class CanvasContainer extends React.Component {
  isMouseDown = false

  onMouseDown = ({ nativeEvent: { offsetX: x, offsetY: y } }) => {
    this.isMouseDown = true

    this.canvas.drawDot({ x, y })
    this.canvas.connectLine({ x, y })
  }

  onMouseMove = ({ nativeEvent: { offsetX: x, offsetY: y } }) => {
    if(!this.isMouseDown)
      return

    this.canvas.connectLine({ x, y })
  }

  onMouseUp = () => {
    this.isMouseDown = false

    this.canvas.closeLine()
  }
  onMouseOut = () =>
    this.isMouseDown && this.onMouseUp()

  render(){
    const { width, height } = this.props
    return (
      <div style={ { width, height } }>
        <Pattern
          width={ width }
          height={ height }
        />
        <Canvas
          ref={ instance => this.canvas = instance }
          onMouseDown={ this.onMouseDown }
          onMouseMove={ this.onMouseMove }
          onMouseUp={ this.onMouseUp }
          onMouseOut={ this.onMouseOut }
          penColor={ this.props.penColor }
          penWidth={ this.props.penWidth }
          mode={ this.props.mode }
        />
      </div>
    )
  }
}
CanvasContainer.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    penColor: state.drawing.pen.color,
    penWidth: state.drawing.pen.width,
    mode: state.drawing.mode
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

CanvasContainer = connect(mapStateToProps, mapDispatchToProps)(CanvasContainer)
export default CanvasContainer
