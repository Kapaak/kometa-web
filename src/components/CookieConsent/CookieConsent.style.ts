import styled, { css } from 'styled-components';

import { Flex, Text } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const CookieConsent = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey['100']};
  padding: 2rem;
  z-index: 10;
  box-shadow: ${({ theme }) => theme.shadows.main};

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      background-color: ${({ theme }) => theme.colors.primary.light};
      padding-block: 2.5rem;
    }
  `}
`;

export const Container = styled(Flex)`
  gap: 4rem;
  flex: 2;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      flex-direction: row;
    }
  `}

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      gap: 8rem;
    }
  `}
`;

export const ButtonContainer = styled(Flex)`
  flex: 1;
  gap: 1rem;
  width: 100%;
  flex-direction: column;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      align-items: center;
      flex-direction: row;
      justify-content: end;
      gap: 2rem;
    }
  `}
`;

export const Description = styled(Text).attrs({ variant: 'body2' })`
  font-weight: 300;
`;
