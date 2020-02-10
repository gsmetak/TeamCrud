import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import ComponentHeader from '../../shared/components/Header'

const ErrorPage = (props) => (
  <div>
    <ComponentHeader>{props.location.state?.message}</ComponentHeader>
    <p>{props.location.state?.detail}</p>
  </div>
)

ErrorPage.propTypes = {
  location: ReactRouterPropTypes.location,
}

export default ErrorPage
