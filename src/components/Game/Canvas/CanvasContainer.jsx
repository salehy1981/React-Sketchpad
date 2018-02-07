import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Pattern from './Pattern'
import Canvas from './Canvas'
import { getOffset } from './scripts'

class CanvasContainer extends React.Component {
  /* MouseEvent section */

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

  /* TouchEvent section */

  onTouchStart = ({ nativeEvent }) => {
    console.log('onTouchStart')
  }

  onTouchMove = ({ nativeEvent }) => {
    console.log('onTouchMove, zoom:', this.props.canvasZoom)

    const { x, y } = getOffset(nativeEvent, this.props.canvasZoom)

    this.canvas.connectLine({ x, y })
  }

  onTouchCancel = () => {
    console.log('onTouchCancel')

    this.canvas.closeLine()
  }

  onTouchEnd = () => {
    console.log('onTouchEnd')

    this.canvas.closeLine()
  }

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
          penColor={ this.props.penColor }
          penWidth={ this.props.penWidth }
          mode={ this.props.mode }

          onMouseDown={ this.onMouseDown }
          onMouseMove={ this.onMouseMove }
          onMouseUp={ this.onMouseUp }
          onMouseOut={ this.onMouseOut }

          onTouchStart={ this.onTouchStart }
          onTouchMove={ this.onTouchMove }
          onTouchCancel={ this.onTouchCancel }
          onTouchEnd={ this.onTouchEnd }
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
    mode: state.drawing.mode,

    //for touch offset scaling
    canvasZoom: state.game.canvasZoom
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

CanvasContainer = connect(mapStateToProps, mapDispatchToProps)(CanvasContainer)
export default CanvasContainer
