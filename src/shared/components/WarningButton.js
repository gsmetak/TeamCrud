import styled from 'styled-components'
import Theme from '../../theme'
import PrimaryButton from './PrimaryButton'

const WarningButton = styled(PrimaryButton)`
  color: ${Theme.warningColor};
  border: 2px solid ${Theme.warningColor};

  &:hover {
    background-color: ${Theme.warningColor};
  }
`

export default WarningButton
