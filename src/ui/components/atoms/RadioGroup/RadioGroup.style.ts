import * as RadioGroup from '@radix-ui/react-radio-group';
import styled, { css } from 'styled-components';
import { minBreakpoint } from '~/utils/dimensions';
import { Chip } from '../Chip';

export const RadioGroupRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    top: 50%;
    left: 50%;
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.grey['900']};
  }
`;

export const RadioGroupItem = styled(RadioGroup.Item)`
  all: unset;
  background-color: ${({ theme }) => theme.colors.grey['100']};
  width: 1.6rem;
  min-width: 1.6rem;
  min-height: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  box-shadow: 0 2px 10px var(--collg);
  border: ${({ theme }) => `1px solid ${theme.colors.grey['600']}`};
`;

export const RadioLabel = styled.label`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
    }
    gap: 2rem;
  `}
`;

export const DiscountChip = styled(Chip)`
  background-color: ${({ theme }) => theme.colors.secondary.main};
  font-size: 1.4rem;
`;

export const NonDiscountChip = styled(Chip)`
  background-color: ${({ theme }) => theme.colors.primary.light};
  font-size: 1.4rem;
`;
