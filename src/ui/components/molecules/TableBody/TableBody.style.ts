import styled from 'styled-components';

import { TableRow } from '../../atoms';

export const TableBodyRow = styled(TableRow)`
  td {
    padding: 2.5rem 2.8rem;
  }
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey['400']};

  &:first-of-type > td {
    padding: 2.4rem 2.8rem 1.4rem;
  }

  &:last-of-type {
    border-bottom: none;

    & > td {
      padding: 1.4rem 2.8rem 2.4rem;
    }
  }
`;
