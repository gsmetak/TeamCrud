import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavLink = styled(Link)`
  color: white;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &:hover {
    color: white;
    text-decoration: none;
  }
`

export default StyledNavLink
