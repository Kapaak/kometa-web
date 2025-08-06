import NextImage from 'next/image';
import styled, { css } from 'styled-components';
import { Headline, Section, Text } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const ContactSection = styled(Section).attrs({ variant: 'tall' })`
  background-color: ${({ theme }) => theme.colors.primary.light};

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      padding-block: 6rem;
    }
  `}
`;

export const ContactHeadline = styled(Headline)`
  margin-bottom: 4rem;
`;

export const ContactSubheadline = styled(Text).attrs({
  variant: 'h3',
  as: 'h3',
})`
  color: ${({ theme }) => theme.colors.primary.main};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const SectionRow = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      flex-direction: row;
    }
  `}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;
  flex: 1 1 50%;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      gap: 4.2rem;
    }
  `}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 32rem;
  max-width: 48rem;
  border-radius: 0.5rem;
`;

export const BorderedItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      gap: 3.8rem;
    }
  `}
`;

export const Image = styled(NextImage)`
  object-fit: cover;
  border-radius: inherit;
`;
