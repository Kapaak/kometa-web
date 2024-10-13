import * as RadixUiSelect from '@radix-ui/react-select';
import styled from 'styled-components';

export const MultiSelect = styled(RadixUiSelect.Root)``;

export const MultiSelectTrigger = styled(RadixUiSelect.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadows.main};
  border: 1px solid ${({ theme }) => theme.colors.grey['400']};
  padding: 1.3rem 2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  min-width: 24rem;
  background-color: ${({ theme }) => theme.colors.grey['100']};

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
    outline: none;
  }

  &[data-state='open'] {
    background-color: ${({ theme }) => theme.colors.primary.light};
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.dark};
  }
`;

export const MultiSelectContent = styled(RadixUiSelect.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 6px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  width: var(--radix-select-trigger-width);
  max-height: var(--radix-select-content-available-height);
  z-index: 111;
`;

export const MultiSelectViewport = styled(RadixUiSelect.Viewport)`
  padding: 0.5rem;
`;

export const SelectOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 5;
`;
