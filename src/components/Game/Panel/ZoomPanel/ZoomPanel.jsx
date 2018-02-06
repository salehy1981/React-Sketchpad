import React from 'react'
import { connect } from 'react-redux'
import { compose, objOf, add } from 'ramda'
import { zoomChange } from '../../../../actions/game'
import { limitZoomToEdges } from '../../../../scripts'

import ZoomIn from './ZoomIn'
import ZoomOut from './ZoomOut'

const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '5px',
  color: 'orangered'
}

class ZoomPanel extends React.Component {
  onZoomIn = compose(
    this.props.dipatchZoomChange,
    limitZoomToEdges,
    add(.1),
    () =>
      this.props.canvasZoom
  )

  onZoomOut = compose(
    this.props.dipatchZoomChange,
    limitZoomToEdges,
    add(-.1),
    () =>
      this.props.canvasZoom
  )

  render(){
    return (
      <div style={ style } className="no-select">
        { (this.props.canvasZoom * 100).toFixed(0) }%

        <ZoomIn onClick={ this.onZoomIn }/>
        <ZoomOut onClick={ this.onZoomOut }/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    canvasZoom: state.game.canvasZoom
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dipatchZoomChange:
      compose(
        dispatch,
        zoomChange,
        objOf('value')
      )
  }
}

ZoomPanel = connect(mapStateToProps, mapDispatchToProps)(ZoomPanel)

export default ZoomPanel
