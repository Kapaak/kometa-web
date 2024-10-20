import styled, { css } from 'styled-components';

import { Divider, Flex, VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const CookieSettingsActions = styled(Flex)`
  gap: 1rem;
  margin-top: 3.4rem;
  width: 100%;
  flex-direction: column;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      flex-direction: row;
      justify-content: end;
    }
  `}

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      margin-top: 0;
    }
  `}
`;

export const CookieSettingsDivider = styled(Divider)`
  color: ${({ theme }) => theme.colors.grey['500']};
  background-color: ${({ theme }) => theme.colors.grey['500']};
  margin-block: 1rem;
`;

export const CookieConsentContainer = styled(VerticalStack)`
  padding-inline: 1rem 2rem;
  max-height: 30rem;
  overflow-y: auto;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      padding-inline: 1rem;
      max-height: 100%;
    }
  `}
`;
