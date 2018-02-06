import React from 'react'
import { connect } from 'react-redux'
import {
  setEraser,
  setPen,
  changeColor
} from '../../../../actions/drawing'
import ColorPanel from './ColorPanel'

class ColorPanelContainer extends React.Component {
  render(){
    return (
      <ColorPanel
        mode={ this.props.mode }
        color={ this.props.color }
        onSetPen={ this.props.onSetPen }
        onSetEraser={ this.props.onSetEraser }
        onChangeColor={ this.props.onChangeColor }
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    color: state.drawing.pen.color,
    mode: state.drawing.mode
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSetPen: () =>
      dispatch(
        setPen()
      ),
    onSetEraser: () =>
      dispatch(
        setEraser()
      ),
    onChangeColor: color =>
      dispatch(
        changeColor(color)
      )
  }
}

ColorPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ColorPanelContainer)
export default ColorPanelContainer
