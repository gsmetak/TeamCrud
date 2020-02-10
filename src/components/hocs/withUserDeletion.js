import React from 'react'
import send from '../../shared/helpers/api'

const withUserDeletion = (ComponentWithDelete) => {
  withUserDeletion.displayName = `withUserDeletion(${ComponentWithDelete.name})`
  const WithUserDeletion = (props) => {
    const deleteUser = (id) => {
      return send({
        method: 'DELETE',
        url: `/users/${id}`,
      })
    }

    return <ComponentWithDelete deleteUser={deleteUser} {...props} />
  }
  return WithUserDeletion
}

export default withUserDeletion
