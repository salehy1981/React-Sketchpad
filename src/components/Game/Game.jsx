import React from 'react'
import PropTypes from 'prop-types'
import Canvas from './Canvas'
import Panel from './Panel'

const style = {
  display: 'flex',
  width: '800px',
  height: '550px',

  boxSizing: 'content-box',
  border: '1px solid #ddd'
}

class Game extends React.Component {
  render(){
    const canvas = {
      width: 550*this.props.canvasZoom,
      height: 550*this.props.canvasZoom
    }

    return (
      <div style={
        {
          ...style,
          width: canvas.width + 250,
          height: canvas.height
        }
      }>
        <Canvas
          width={ canvas.width }
          height={ canvas.height }
        />
        <Panel
          width={ 250 }
        />
      </div>
    )
  }
}
Game.propTypes = {
  canvasZoom: PropTypes.number.isRequired
}

export default Game
