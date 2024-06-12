import * as RadixAccordion from '@radix-ui/react-accordion';
import styled, { css, keyframes } from 'styled-components';

import { Text, VerticalStack } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

const slideDown = keyframes`
  from { height: 0 }
  to { height: var(--radix-accordion-content-height) }
`;

const slideUp = keyframes`
  from { height: var(--radix-accordion-content-height)}
  to { height: 0 }
`;

export const Title = styled(Text).attrs({ variant: 'h3' })`
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 2rem;
`;

export const QuestionnaireRoot = styled(RadixAccordion.Root)`
  padding: 2.4rem;
  box-shadow: ${({ theme }) => theme.shadows.dark};

  [data-state='open'] {
    overflow: initial;
  }

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      padding: 4.8rem 4.8rem 2.4rem;
    }
  `}
`;

export const QuestionaireDescription = styled(Text).attrs({ variant: 'body2' })`
  max-width: 60rem;
`;

export const QuestionnaireContent = styled(RadixAccordion.Content)`
  overflow: hidden;
  animation-fill-mode: forwards;

  &[data-state='open'] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state='closed'] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;

export const FormContent = styled(VerticalStack).attrs({ as: 'form' })`
  margin-top: 2.4rem;
  gap: 1.6rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      margin-top: 6rem;
    }
  `}
`;

export const ControlledItems = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      gap: 2.4rem;
    }
  `}
`;
