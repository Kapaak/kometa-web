import styled, { css } from 'styled-components';

import { Divider, Flex } from '~/ui/components/atoms';
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
