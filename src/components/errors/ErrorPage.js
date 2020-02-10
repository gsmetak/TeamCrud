import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import { shape, string } from 'prop-types'
import ComponentHeader from '../../shared/components/Header'

const ErrorPage = (props) => {
  const { message, detail } = props.error ? props.error : props.location.state

  return (
    <div>
      <ComponentHeader>{message || 'Something went wrong.'}</ComponentHeader>
      {detail && <p>{detail}</p>}
    </div>
  )
}

ErrorPage.propTypes = {
  location: ReactRouterPropTypes.location,
  error: shape({
    message: string,
    detail: string,
  }),
}

export default ErrorPage
