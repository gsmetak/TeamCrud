import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import { shape, string } from 'prop-types'
import ComponentHeader from '../../shared/components/Header'
import PreWrappedParagraph from '../../shared/components/PreWrappedParagraph'

const ErrorPage = (props) => {
  const { message, detail, componentStack } = props.error ? props.error : props.location.state

  return (
    <div>
      <ComponentHeader>{message || 'Something went wrong.'}</ComponentHeader>
      {detail && <p>{detail}</p>}
      {componentStack && <PreWrappedParagraph>{componentStack}</PreWrappedParagraph>}
    </div>
  )
}

ErrorPage.propTypes = {
  location: ReactRouterPropTypes.location,
  error: shape({
    message: string,
    detail: string,
    componentStack: string,
  }),
}

export default ErrorPage
