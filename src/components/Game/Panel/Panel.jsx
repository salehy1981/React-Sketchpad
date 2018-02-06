import React from 'react'
import PropTypes from 'prop-types'

import ColorPanel from './ColorPanel'
import ZoomPanel from './ZoomPanel'

const style = {
  panel: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
   borderLeft: '1px solid #ddd'
 },
 filler: {
   display: 'flex',
   flexGrow: 1
 },
 zoomPanel: {
   position: 'absolute',
   right: '10px',
   bottom: '10px'
 }
}

const Panel = props => (
  <div style={ style.panel }>
    <ColorPanel />
    <aside style={ style.filler } />
    <div style={ style.zoomPanel }>
      <ZoomPanel />
    </div>
  </div>
)

export default Panel
