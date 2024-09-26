import NextImage from 'next/image';

import styled, { css } from 'styled-components';

import { minBreakpoint } from '~/utils/dimensions';

import { Text } from '../../atoms';

export const ListItem = styled.li`
  margin-left: 2rem;
`;

export const ImageContainer = styled.div<{ aspectRatio: string }>`
  position: relative;
  width: 100%;
  max-height: 45rem;
  aspect-ratio: ${(props) => props.aspectRatio};
`;

export const TextBuilderImage = styled(NextImage)`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
`;

export const H2 = styled(Text).attrs({ as: 'h2' })`
  font-size: 2rem;
  text-align: ${({ align }) => align ?? 'left'};
  color: ${({ theme }) => theme.colors.grey['900']};

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      font-size: 3rem;
    }
  `}
`;

export const H3 = styled(Text).attrs({ as: 'h3' })`
  font-size: 1.8rem;
  text-align: ${({ align }) => align ?? 'left'};
  color: ${({ theme }) => theme.colors.primary.main};

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      font-size: 2.6rem;
    }
  `}
`;
