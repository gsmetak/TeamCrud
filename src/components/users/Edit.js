import React, { useEffect, useGlobal, useState } from 'reactn'
import ReactRouterPropTypes from 'react-router-prop-types'
import { func } from 'prop-types'
import ComponentHeader from '../../shared/components/Header'
import UserForm from '../forms/UserForm'
import send from '../../shared/helpers/api'
import WarningButton from '../../shared/components/WarningButton'
import withUserDeletion from '../hocs/withUserDeletion'

const Edit = (props) => {
  const { id } = props.match.params
  const [loading, setLoading] = useGlobal('loading')
  const [userList, setUserList] = useGlobal('userList')
  const [userInfo, setUserInfo] = useState({ firstName: '', lastName: '', email: '' })

  useEffect(() => {
    const fetchUser = () => {
      setLoading(true)
      send({
        method: 'GET',
        url: `/users/${id}`,
      })
        .then((response) => {
          setLoading(false)
          setUserInfo(response.data.data)
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

    fetchUser()
  }, [id, props.history])

  const editUser = (user) => {
    setLoading(true)
    send({
      method: 'PUT',
      url: `/users/${id}`,
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

  const deleteUser = () => {
    setLoading(true)
    props
      .deleteUser(id)
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
      <ComponentHeader>Edit User Form</ComponentHeader>
      <WarningButton onClick={deleteUser}>Delete</WarningButton>
      <UserForm buttonLabel="Save" action={editUser} user={userInfo} />
    </div>
  )
}

Edit.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  deleteUser: func,
}

export default withUserDeletion(Edit)
