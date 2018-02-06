import React from 'react';
import { Route } from 'react-router-dom';
import CenteredLayout from './CenteredLayout'

const CenteredLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <CenteredLayout>
        <Component {...matchProps} />
      </CenteredLayout>
    )} />
  )
}

export default CenteredLayoutRoute
