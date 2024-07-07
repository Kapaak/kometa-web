import * as RadixSwitch from '@radix-ui/react-switch';
import styled from 'styled-components';

export const Switch = styled(RadixSwitch.Root)`
  all: unset;
  cursor: pointer;
  min-width: 4.2rem;
  height: 2.7rem;
  background-color: ${({ theme }) => theme.colors.grey['500']};
  border-radius: 1.4rem;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.main};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.main};
  }
  &[data-state='checked'] {
    background-color: ${({ theme }) => theme.colors.success.main};
  }
`;

export const SwitchThumb = styled(RadixSwitch.Thumb)`
  display: block;
  width: 2.1rem;
  height: 2.1rem;
  background-color: ${({ theme }) => theme.colors.grey['100']};
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.main};
  transition: transform 100ms;
  transform: translateX(0.2rem);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(1.9rem);
  }
`;
