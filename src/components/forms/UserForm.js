import React, { useEffect, useGlobal, useState } from 'reactn'
import { func, string } from 'prop-types'
import PrimaryButton from '../../shared/components/PrimaryButton'
import StyledInput from '../../shared/components/StyledInput'
import { userType } from '../../types'
import CenteredReactLoading from '../../shared/components/CenteredReactLoading'
import Theme from '../../theme'

const UserForm = (props) => {
  const { user } = props
  const [userInfo, setUserInfo] = useState(user)
  const [loading] = useGlobal('loading')

  useEffect(() => {
    setUserInfo(user)
  }, [user])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserInfo({ ...userInfo, [name]: value })
  }

  const handleAction = () => {
    props.action(userInfo)
  }

  return (
    <form>
      <div className="form-group">
        <label>First Name:</label>
        <StyledInput type="text" name="firstName" value={userInfo.firstName} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <StyledInput type="text" name="lastName" value={userInfo.lastName} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <StyledInput type="text" name="email" value={userInfo.email} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <PrimaryButton type="button" onClick={handleAction}>
          {props.buttonLabel}
        </PrimaryButton>
        {loading && <CenteredReactLoading type="spin" color={Theme.mainColor} height={30} width={30} />}
      </div>
    </form>
  )
}

UserForm.propTypes = {
  user: userType,
  action: func,
  buttonLabel: string,
}

UserForm.defaultProps = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
  },
}

export default UserForm
