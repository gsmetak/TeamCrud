import React from 'react'
import { object } from 'prop-types'
import ErrorPage from './ErrorPage'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, hasError: false }
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      hasError: true,
    })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorPage
          location={{
            state: {
              message: 'Something went wrong.',
              detail: this.state.error.toString(),
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
