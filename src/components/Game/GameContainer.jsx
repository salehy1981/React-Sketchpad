import React from 'react'
import { connect } from 'react-redux'

import Game from './Game'

class GameContainer extends React.Component {
  render(){
    return (
      <Game
        canvasZoom={ this.props.canvasZoom }
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    canvasZoom: state.game.canvasZoom
  }
}
const mapDispatchToProps = (dispatch, ownProps) => ({})

GameContainer = connect(mapStateToProps, mapDispatchToProps)(GameContainer)
export default GameContainer
