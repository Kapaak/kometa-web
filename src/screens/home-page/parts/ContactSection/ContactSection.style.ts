import styled from 'styled-components';

import { Text, VerticalStack } from '~/ui/components/atoms';

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
export const SwimmingPoolContent = styled.div`
  margin-left: 1rem;
`;

export const ContactSectionContainer = styled(VerticalStack)`
  gap: 1.6rem;

  .google-map {
    min-height: 40rem;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.shadows.main};
  }
`;
