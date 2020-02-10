import PropTypes from 'prop-types'

const { shape, string, arrayOf } = PropTypes

export const userType = shape({
  _id: string,
  firstName: string,
  lastName: string,
  email: string,
})

export const userListType = arrayOf(userType)
