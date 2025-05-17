import NextLink from 'next/link';
import styled, { css } from 'styled-components';
import { Card, Flex, Section, VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const HeroSection = styled(Section)`
  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      padding-bottom: 6rem;
    }
  `}
`;

export const SectionCard = styled(Card)`
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary.light};

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      padding: 5rem 4rem;
    }
  `}
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: space-between;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      flex-direction: row;
    }
  `}
`;

export const SectionTextContainer = styled(Flex)`
  flex-direction: column;
  gap: 2rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      gap: 2rem;
    }
  `}
`;

export const SectionDescriptionContainer = styled(Flex)`
  flex-direction: column;
`;

export const SectionPriceContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main};
  width: fit-content;
  padding: 0.4rem 1.4rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.grey['100']};

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      padding: 0.9rem 1.8rem;
    }
  `}
`;

export const SectionCalendarContainer = styled.div`
  flex: 0 0 30%;
  display: grid;
  place-content: center;
  background-color: ${({ theme }) => theme.colors.grey['100']};
  padding-block: 2rem;
  border-radius: 0.7rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      align-self: flex-end;
    }
  `}
`;

export const SectionActionsContainer = styled(VerticalStack)`
  width: auto;
  gap: 3.5rem;
  align-items: center;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      min-width: 41rem;
    }
  `}
`;

export const SectionActionLink = styled(NextLink)`
  align-self: flex-end;
  margin-top: auto;
`;

export const Link = styled(NextLink)`
  color: inherit;

  &:hover {
    text-decoration: underline;
    text-decoration-color: inherit;
  }
`;

export const SectionInformationContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['hasSkillRequirement'].includes(prop),
})<{
  hasSkillRequirement?: boolean;
}>`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;

  li {
    list-style: none;
  }

  ${({ theme, hasSkillRequirement }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      margin-top: 4rem;
      grid-template-columns: ${hasSkillRequirement ? '1.5fr 2fr' : '1fr'};
    }
  `}
`;
