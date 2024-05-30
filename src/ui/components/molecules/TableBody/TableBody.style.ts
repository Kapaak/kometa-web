import styled from 'styled-components';

import { TableRow } from '../../atoms';

export const TableBodyRow = styled(TableRow)`
  td {
    padding: 1.4rem 2.8rem;
  }

  &:first-of-type > td {
    padding: 2.4rem 2.8rem 1.4rem;
  }

  &:last-of-type > td {
    padding: 1.4rem 2.8rem 2.4rem;
  }
`;
