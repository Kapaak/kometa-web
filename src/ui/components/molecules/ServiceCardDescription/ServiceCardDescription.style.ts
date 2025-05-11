import Image from 'next/image';
import Link from 'next/link';

import styled, { css } from 'styled-components';

import { minBreakpoint } from '~/utils/dimensions';
import { Card, Flex, Text, VerticalStack } from '../../atoms';

export const ServiceCardDescription = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  box-shadow: ${({ theme }) => theme.shadows.dark};
`;

export const ServiceCardBackgroundImage = styled(Image)`
  position: fixed;
  border-radius: inherit;
  object-fit: cover;
`;
export const ServiceCardImageContainer = styled.div`
  position: relative;
  height: 18rem;
  border-radius: 1rem 1rem 0 0;
`;

export const ServiceCardTitle = styled(Text).attrs({ as: 'h3', variant: 'h3' })`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.secondary};
  pointer-events: none;
`;

export const ServiceChipContainer = styled(VerticalStack)`
  position: relative;
  gap: 1.2rem;
  pointer-events: none;
  padding: 1.8rem 2.9rem 0;
`;

export const ServiceCardTextContainer = styled(Flex)`
  flex-direction: column;
  padding: 2rem 2.4rem 0.4rem;
  gap: 1rem;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.4rem 2.4rem;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: auto;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      flex-direction: row;
    }
  `}
`;

export const ServiceCardLink = styled(Link)`
  ${({ theme }) => css`
    width: 100%;

    button {
      width: 100%;
    }

    @media (${minBreakpoint(theme.breakpoints.md)}) {
      align-self: flex-start;
      width: auto;
    }
  `}
`;
