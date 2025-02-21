import NextLink from 'next/link';
import styled, { css } from 'styled-components';
import { Flex, Text } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const FoundersCupSection = styled.section`
  padding: 0 2rem;
  margin-bottom: 4rem;
`;

export const CzechSwimmingLink = styled(NextLink)`
  margin-inline: auto;
  margin-block: 4rem;
`;

export const Subheadline = styled(Text).attrs({
  as: 'h3',
  variant: 'h3',
})`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const ContestDescriptionContainer = styled(Flex)`
  ${({ theme }) => css`
    flex-direction: column;
    gap: 2rem;

    @media (${minBreakpoint(theme.breakpoints.md)}) {
      justify-content: space-between;
      gap: 5rem;
      flex-direction: row;
    }
  `}
`;

export const Content = styled(Flex)`
  margin-block: 2rem 6rem;
  gap: 2rem;
  flex-direction: column;
  scroll-margin: 10rem;
`;

export const TimeTableContainer = styled(Flex)`
  ${({ theme }) => css`
    flex-direction: column;
    gap: 1rem;

    @media (${minBreakpoint(theme.breakpoints.md)}) {
      justify-content: space-between;
      gap: 5rem;
      flex-direction: row;
    }
  `}
`;

export const TimeTableGrid = styled.div`
  display: grid;
  width: 36rem;
  max-width: 100%;
  grid-template-columns: 2.2rem 1fr 9.7rem;
  gap: 1.6rem;
`;

export const ImageContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['aspectRatio', 'removeMargin'].includes(prop),
})<{
  aspectRatio: string;
  removeMargin?: boolean;
}>`
  position: relative;
  margin-top: ${({ removeMargin }) => (removeMargin ? '0' : '2rem')};
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
  width: 100%;
  height: auto;
  ${({ theme, removeMargin }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      margin-top: ${removeMargin ? '0' : '6rem'};
    }
  `}
`;
