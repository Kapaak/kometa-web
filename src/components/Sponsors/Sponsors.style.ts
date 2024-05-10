import styled, { css } from 'styled-components';

import { Flex } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const SponsorContainer = styled(Flex)`
  overflow-y: auto;
`;

export const Sponsors = styled.section`
  display: flex;
  padding: 4rem;
  z-index: 0;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      height: 25rem;
    }
  `}
`;
