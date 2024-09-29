import styled, { css } from 'styled-components';

import { Chip, Flex } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const BlogFilter = styled(Flex)`
  gap: 1rem;
  flex-direction: column;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      flex-direction: row;
      gap: 2rem;
    }
  `}
`;

export const FilterCategory = styled(Chip).attrs({
  as: 'button',
})<{ selected?: boolean }>`
  cursor: pointer;

  ${({ theme: { colors }, selected }) => css`
    background-color: ${selected ? colors.primary.light : colors.grey['400']};
    color: ${selected ? colors.grey['900'] : colors.grey['700']};
  `}

  &:hover {
    opacity: 0.8;
  }
`;
