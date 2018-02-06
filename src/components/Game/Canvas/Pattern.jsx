import React from 'react'
import PropTypes from 'prop-types'

export default class Pattern extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }

  static state = {
    image: false,
    isImageLoaded: false
  }

  //load image
  componentWillMount = () => {
    const image = new Image()
    image.onload = () =>
      this.setState({
        image,
        isImageLoaded: true
      })
    image.src = 'pattern.png'
  }

  componentDidMount = () =>
    this.ctx = this.canvasElement.getContext('2d')

  //redraw pattern
  componentDidUpdate = () => {
    if(!this.state.isImageLoaded)
      return

    this.ctx.fillStyle = this.ctx.createPattern(
      this.state.image,
      'repeat'
    )
    this.ctx.fillRect(0, 0, this.props.width, this.props.height)
  }

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
