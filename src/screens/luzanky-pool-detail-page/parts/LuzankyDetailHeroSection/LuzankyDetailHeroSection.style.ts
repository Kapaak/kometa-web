import styled, { css } from 'styled-components';
import { Card, Flex } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const Section = styled.section`
  padding: 2rem 4rem;
`;

export const SectionCard = styled(Card)`
  padding: 5rem 4rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
`;

export const SectionContainer = styled(Flex)`
  gap: 2rem;
  justify-content: space-between;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      gap: 4rem;
    }
  `}
`;

export const SectionTextContainer = styled(Flex)`
  flex-direction: column;
  gap: 2rem;
`;

export const SectionDescriptionContainer = styled(Flex)`
  flex-direction: column;
`;

export const SectionInformationContainer = styled(Flex)`
  gap: 2rem;
  margin-top: 4rem;
  justify-content: space-between;

  li {
    list-style: none;
  }
`;
