import styled from 'styled-components'
import ReactLoading from 'react-loading'

const CenteredReactLoading = styled(ReactLoading)`
  display: inline-block;
  margin: auto;
  margin-right: 1rem;
  @media (max-width: 992px) {
    margin-left: ${(props) => (props.center ? '1rem' : '0')};
  }
`

export default CenteredReactLoading
