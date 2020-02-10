import React, { useGlobal } from 'reactn'
import ReactRouterPropTypes from 'react-router-prop-types'
import ComponentHeader from '../../shared/components/Header'
import UserForm from '../forms/UserForm'
import send from '../../shared/helpers/api'

const Add = (props) => {
  const [, setLoading] = useGlobal('loading')
  const [, setUserList] = useGlobal('userList')

  const addUser = (user) => {
    setLoading(true)
    send({
      method: 'POST',
      url: '/users',
      data: user,
    })
      .then((response) => {
        setLoading(false)
        setUserList(response.data.data)
        props.history.replace('/')
      })
      .catch((error) => {
        setLoading(false)
        props.history.push({
          pathname: '/error',
          state: {
            message: error.message,
            detail: error.detail,
          },
        })
      })
  }

  return (
    <div>
      <ComponentHeader>Create User Form</ComponentHeader>
      <UserForm buttonLabel="Create User" action={addUser} />
    </div>
  )
}

Add.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
}

export default Add
