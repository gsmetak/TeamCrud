import React from 'react'
import { object } from 'prop-types'
import ErrorPage from './ErrorPage'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null, hasError: false }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
      hasError: true,
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          location={{
            state: {
              message: this.state.error.message,
              detail: this.state.error.detail,
              componentStack: this.state.errorInfo.componentStack
            },
          }}
        />
      )
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: object,
}

export default ErrorBoundary
