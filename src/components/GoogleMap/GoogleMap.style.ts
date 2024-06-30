import styled, { css } from 'styled-components';

import { minBreakpoint } from '~/utils/dimensions';

export const GoogleMap = styled.div`
  height: 100%;
  width: 100%;

  //ajdust style of info window header content
  .gm-style-iw-ch {
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
    letter-spacing: 0.1rem;
    & > span {
      font-family: ${({ theme }) => theme.fonts.secondary};
    }
  }

  //adjust style of info window content
  .gm-style-iw.gm-style-iw-c {
    ${({ theme }) => css`
      @media (${minBreakpoint(theme.breakpoints.lg)}) {
        padding: 1.5rem 2.2rem;
      }
    `}
  }
`;
