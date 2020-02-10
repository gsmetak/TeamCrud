import styled from 'styled-components'
import TableRow from '../../components/tables/TableRow'
import Theme from '../../theme'

const VerticalTableRow = styled(TableRow)`
  transition: background-color 0.2s ease;
  td {
    vertical-align: middle;
  }

  &:hover {
    background-color: ${Theme.lightColor};
  }
`

export default VerticalTableRow
