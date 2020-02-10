import React, { useEffect, useGlobal } from 'reactn'
import ReactRouterPropTypes from 'react-router-prop-types'
import UserTable from '../tables/UserTable'
import ComponentHeader from '../../shared/components/Header'
import PrimaryButton from '../../shared/components/PrimaryButton'
import StyledNavLink from '../../shared/components/StyledNavLink'
import send from '../../shared/helpers/api'
import Theme from '../../theme'
import CenteredReactLoading from '../../shared/components/CenteredReactLoading'

const List = (props) => {
  const [userList, setUserList] = useGlobal('userList')
  const [loading, setLoading] = useGlobal('loading')

  useEffect(() => {
    const fetchUsers = () => {
      setLoading(true)
      send({
        method: 'GET',
        url: '/users',
      })
        .then((response) => {
          setUserList(response.data.data)
          setLoading(false)
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

    fetchUsers()
  }, [props.history])

  return (
    <div>
      <ComponentHeader>User List</ComponentHeader>
      {loading && <CenteredReactLoading type="spin" color={Theme.mainColor} height={30} width={30} />}
      <StyledNavLink to="/users/create">
        <PrimaryButton>Create User</PrimaryButton>
      </StyledNavLink>
      <UserTable loading={loading} userList={userList} />
    </div>
  )
}

List.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
}

export default List
