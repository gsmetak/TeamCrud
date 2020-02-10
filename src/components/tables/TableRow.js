import React, { useGlobal } from 'reactn'
import { func, string } from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'
import { withRouter } from 'react-router-dom'
import { useState } from 'react'
import { userType } from '../../types'
import PrimaryButton from '../../shared/components/PrimaryButton'
import WarningButton from '../../shared/components/WarningButton'
import StyledNavLink from '../../shared/components/StyledNavLink'
import withUserDeletion from '../hocs/withUserDeletion'
import CenteredReactLoading from '../../shared/components/CenteredReactLoading'
import Theme from '../../theme'

const TableRow = (props) => {
  const { _id, firstName, lastName, email } = props.user
  const [loading, setLoading] = useGlobal('loading')
  const [isClicked, setIsClicked] = useState(false)
  const [userList, setUserList] = useGlobal('userList')

  const deleteUser = () => {
    setIsClicked(true)
    setLoading(true)
    props
      .deleteUser(_id)
      .then((response) => {
        setLoading(false)
        setIsClicked(false)
        setUserList(response.data.data)
        props.history.replace('/')
      })
      .catch((error) => {
        setLoading(false)
        setIsClicked(false)
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
    <tr className={props.className}>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>
        <StyledNavLink to={`/users/${_id}`}>
          <PrimaryButton>Edit</PrimaryButton>
        </StyledNavLink>
        <WarningButton onClick={deleteUser}>Delete</WarningButton>
        {loading && isClicked && (
          <CenteredReactLoading center="true" type="spin" color={Theme.mainColor} height={30} width={30} />
        )}
      </td>
    </tr>
  )
}

TableRow.propTypes = {
  className: string,
  user: userType,
  deleteUser: func,
  history: ReactRouterPropTypes.history.isRequired,
}

export default withRouter(withUserDeletion(TableRow))
