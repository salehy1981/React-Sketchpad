import React from 'react';

const style = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  main: {
    margin: 'auto'
  }
}

const CenteredLayout = ({ children, ...rest }) => {
  return (
    <div style={ style.container }>
      <main style={ style.main }>
        { children }
      </main>
    </div>
  )
}

export default CenteredLayout
