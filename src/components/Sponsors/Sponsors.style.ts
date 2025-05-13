import styled, { css } from 'styled-components';

import { Flex, Section } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const SponsorContainer = styled(Flex)`
  overflow-y: auto;
`;

export const SponsorsSection = styled(Section)`
  display: flex;
  z-index: 0;
  scroll-margin-top: 10rem;
  padding-inline: 0;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      height: 25rem;
    }
  `}
`;
