import React from 'react'
import PropTypes from 'prop-types'
import { CirclePicker } from 'react-color'
import { identity } from 'ramda'

class PalettePopup extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func
  }
  static defaultProps = {
    onClose: identity
  }

  colors = [
    "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3",
    "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b",
    "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#333"
  ]

  style = {
    position: 'absolute',
    top: '-3px',
    right: '-3px',

    boxSizing: 'content-box',
    background: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    boxShadow: '0 0 5px #ccc'
  }

  render() {
    return (
      <div style={this.style}>
        <CirclePicker
          colors={ this.colors }
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

const BackgroundLayer = ({ onClick, ...props }) => {
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  }
  return (
    <div
      style={style}
      onClick={onClick}
      { ...props }
    />
  )
}
BackgroundLayer.propTypes = {
  onClick: PropTypes.func
}
BackgroundLayer.defaultProps = {
  onClick: identity
}

const ColorIndicator = ({ color, onClick, ...props }) => {
  const style = {
    background: color
  }
  return (
    <div
      className="circle"
      style={style}
      onClick={onClick}
      { ...props }
    />
  )
}
ColorIndicator.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func
}
ColorIndicator.defaultProps = {
  onClick: identity
}


class Picker extends React.Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    onChange: PropTypes.func
  }
  static defaultProps = {
    onChange: identity
  }

  state = {
    paletteOpened: false
  }

  handleColorChange = ({ hex }) => {
    this.setState({
      paletteOpened: false
    })
    this.props.onChange(hex)
  }

  handleOpenPalette = () =>
    this.setState({
      paletteOpened: true
    })

  handlePaletteClose = () =>
    this.setState({
      paletteOpened: false
    })

  style = {
    position: 'relative'
  }

  render() {
    return (
      <div>
        {
          this.state.paletteOpened &&
            <BackgroundLayer
              onClick={ this.handlePaletteClose }
            />
        }
        <div style={ this.style }>
          <ColorIndicator
            color={ this.props.color }
            onClick={ this.handleOpenPalette }
          />
          {
            this.state.paletteOpened &&
              <PalettePopup
                onChange={ this.handleColorChange }
              />
          }
        </div>
      </div>
    )
  }
}

export default Picker
