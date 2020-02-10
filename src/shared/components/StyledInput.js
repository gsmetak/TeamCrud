import styled from 'styled-components'
import Theme from '../../theme'

const StyledInput = styled.input`
  color: ${Theme.darkColor};
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 0.2rem;
  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(61, 103, 244, 0.2);
    outline: 0;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`

export default StyledInput
