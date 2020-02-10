import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import ComponentHeader from '../../shared/components/Header'
import PreWrappedParagraph from '../../shared/components/PreWrappedParagraph'

const ErrorPage = (props) => (
  <div>
    <ComponentHeader>{props.location.state?.message || 'Something went wrong.'}</ComponentHeader>
    {props.location.state?.detail && <p>{props.location.state.detail}</p>}
    {props.location.state?.componentStack &&
    <PreWrappedParagraph>{props.location.state?.componentStack}</PreWrappedParagraph>}
  </div>
)

ErrorPage.propTypes = {
  location: ReactRouterPropTypes.location,
}

export default ErrorPage
