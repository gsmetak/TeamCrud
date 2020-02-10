import React from 'react'
import { element } from 'prop-types'
import ErrorPage from './ErrorPage'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, hasError: false }
  }

  componentDidCatch(error) {
    this.setState({
      error,
      hasError: true,
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          error={{
            message: this.state.error.message,
            detail: this.state.error.detail,
          }}
        />
      )
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: element,
}

export default ErrorBoundary
