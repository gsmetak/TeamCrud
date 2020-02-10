import styled from 'styled-components'

const FixedTable = styled.table`
  table-layout: fixed;

  @media (max-width: 992px) {
    table-layout: auto;
  }
`

export default FixedTable
