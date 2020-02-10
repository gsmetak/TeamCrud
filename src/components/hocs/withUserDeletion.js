import React from 'react'
import send from '../../shared/helpers/api'

const withUserDeletion = (ComponentWithDelete) => {
  withUserDeletion.displayName = `withUserDeletion(${ComponentWithDelete.name})`
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    deleteUser(id) {
      return send({
        method: 'DELETE',
        url: `/users/${id}`,
      })
    }

    render() {
      return <ComponentWithDelete deleteUser={this.deleteUser} {...this.props} />
    }
  }
}

export default withUserDeletion
