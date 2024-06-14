import styled, { css } from 'styled-components';

import { Text } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const ContactSection = styled.section`
  padding: 2rem 2rem 0;
  scroll-margin-top: 10rem;
`;

export const SwimmingPoolTitle = styled(Text).attrs({
  as: 'h3',
  variant: 'h3',
})`
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: 0.1rem;
`;
export const ContactSectionDescription = styled(Text).attrs({
  variant: 'body2',
})`
  max-width: 60rem;
`;

export const SwimmingPoolContent = styled.div`
  margin-left: 1rem;
`;

export const ContactSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .google-map {
    min-height: 40rem;
  }

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.sm)}) {
      flex-direction: row;
    }
  `}
`;
