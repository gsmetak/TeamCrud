import React from 'react'
import { userListType } from '../../types'
import VerticalTableRow from '../../shared/components/VerticalTableRow'
import FixedTable from '../../shared/components/FixedTable'

const UserTable = (props) => {
  const { userList } = props

  const getRows = (users) => {
    return users.map((user) => {
      return <VerticalTableRow key={user._id} user={user} />
    })
  }

  return (
    <div className="table-responsive-md">
      <FixedTable className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{getRows(userList)}</tbody>
      </FixedTable>
    </div>
  )
}

UserTable.propTypes = {
  userList: userListType,
}

export default UserTable
