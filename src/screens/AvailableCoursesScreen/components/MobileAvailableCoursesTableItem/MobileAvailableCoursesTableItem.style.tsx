import styled from 'styled-components';

import { Card } from '~/ui/components/atoms';

export const MobileAvailableCoursesTableItem = styled(Card).attrs({
  as: 'article',
})`
  padding: 1.8rem 2.9rem 2.4rem;
  border: 1px solid ${({ theme }) => theme.colors.grey[400]};
  box-shadow: ${({ theme }) => theme.shadows.main};
`;
