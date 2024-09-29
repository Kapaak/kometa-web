import * as RadixUiPopover from '@radix-ui/react-popover';
import styled, { keyframes } from 'styled-components';

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-.2rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-.2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(.2rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const PopoverContent = styled(RadixUiPopover.Content)`
  border-radius: 1rem;
  padding: 1rem 0;
  min-width: 26rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.grey['100']};
  box-shadow: ${({ theme }) => theme.shadows.main};
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state='open'][data-side='top'] {
    animation-name: ${slideDownAndFade};
  }
  &[data-state='open'][data-side='right'] {
    animation-name: ${slideLeftAndFade};
  }
  &[data-state='open'][data-side='bottom'] {
    animation-name: ${slideUpAndFade};
  }
  &[data-state='open'][data-side='left'] {
    animation-name: ${slideRightAndFade};
  }
`;

export const PopoverClose = styled(RadixUiPopover.Close)`
  color: ${({ theme }) => theme.colors.grey['900']};
  margin-left: auto;
  cursor: pointer;
  outline: none;
`;

export const PopoverArrow = styled(RadixUiPopover.Arrow)`
  fill: ${({ theme }) => theme.colors.grey['100']};
`;

export const PopoverHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1.6rem 1rem;
`;

export const PopoverTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;
`;
