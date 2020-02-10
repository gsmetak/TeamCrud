import styled from 'styled-components'
import Theme from '../../theme'

const PrimaryButton = styled.button`
  display: inline-block;
  background-color: transparent;
  color: ${Theme.mainColor};
  padding: 0.4rem 0.5rem;
  min-width: 75px;
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 500;
  border: 2px solid ${Theme.mainColor};
  border-radius: 0.4rem;
  outline: 0;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: ${Theme.mainColor};
    color: white;
  }

  &:focus {
    outline: 0;
  }

  @media (max-width: 992px) {
    font-size: 0.8rem;
    min-width: 60px;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0.5rem;
  }
`

export default PrimaryButton
