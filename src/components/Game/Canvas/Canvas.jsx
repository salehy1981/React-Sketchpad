import React from 'react'
import PropTypes from 'prop-types'
import fit from 'fit.js'

export default class Canvas extends React.Component {
  static propTypes = {
    onMouseDown: PropTypes.func.isRequired,
    onMouseMove: PropTypes.func.isRequired,
    onMouseUp: PropTypes.func.isRequired,
    penColor: PropTypes.string,
    penWidth: PropTypes.number,
    mode: PropTypes.string
  }

  drawDot = ({ x , y }) => {
    this.ctx.beginPath()
    this.ctx.arc(x, y, this.props.penWidth / 2, 0, 2 * Math.PI, true)
    this.ctx.fill()
  }

  pathDrawingStarted = false
  connectLine = ({ x, y }) => {
    this.ctx.beginPath()
    if(this.pathDrawingStarted){
      this.ctx.moveTo(this.lastPoint.x, this.lastPoint.y)
      this.ctx.lineTo(x, y)
      this.ctx.stroke()
    } else {
      this.ctx.moveTo(x, y)
      this.pathDrawingStarted = true
    }
    this.lastPoint = { x, y }
  }
  closeLine = () => this.pathDrawingStarted = false

  configCanvas = () => {
    const {
      penColor: color
    } = this.props

    let {
      penWidth: width
    } = this.props

    if(this.props.mode === 'eraser'){
      this.ctx.globalCompositeOperation = 'destination-out'
      width += 5
    } else {
      this.ctx.globalCompositeOperation = 'source-over'
    }

    //zoom canvas
    fit(this.canvasElement, this.canvasElement.parentElement)

    //update color
    this.ctx.strokeStyle = color
    this.ctx.fillStyle = color

    //update width
    this.ctx.lineWidth = width
  }

  componentDidUpdate = this.configCanvas

  componentDidMount = () => {
    this.ctx = this.canvasElement.getContext('2d')

    this.ctx.lineCap = 'round'
    this.ctx.lineJoin = 'round'
    this.configCanvas()
  }

  render(){
    const width = 550,
          height = 550

    return (
      <canvas
        ref={ instance => this.canvasElement = instance }
        style={ { width, height } }
        width={ width }
        height={ height }
        
        onMouseDown={ this.props.onMouseDown }
        onMouseMove={ this.props.onMouseMove }
        onMouseUp={ this.props.onMouseUp }
        onMouseOut={ this.props.onMouseOut }

        onTouchStart={ this.props.onTouchStart }
        onTouchMove={ this.props.onTouchMove }
        onTouchCancel={ this.props.onTouchCancel }
        onTouchEnd={ this.props.onTouchEnd }
      />
    )
  }
}
