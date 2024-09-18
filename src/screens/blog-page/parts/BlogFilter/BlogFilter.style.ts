import styled, { css } from 'styled-components';

import { Chip } from '~/ui/components/atoms';

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
