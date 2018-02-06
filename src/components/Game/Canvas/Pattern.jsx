import React from 'react'
import PropTypes from 'prop-types'

export default class Pattern extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }

  static state = {
    image: false
  }

  componentDidMount = () => {
    this.ctx = this.canvasElement.getContext('2d')

    const image = new Image()
    image.onload = () => this.setState({
      image
    })
    image.src = 'https://i.imgur.com/vYd7f7l.png'
  }

  drawPattern = () => {
    this.ctx.fillStyle = this.ctx.createPattern(
      this.state.image,
      'repeat'
    )

    this.ctx.fillRect(0, 0, this.props.width, this.props.height)
  }

  componentDidUpdate = this.drawPattern

  render(){
    return (
      <canvas
        width={ this.props.width }
        height={ this.props.height }
        style={ { opacity: 0.2 } }
        ref={ instance => this.canvasElement = instance }
      />
    )
  }
}
