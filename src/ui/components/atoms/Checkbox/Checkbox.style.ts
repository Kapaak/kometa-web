import * as RadixUICheckbox from '@radix-ui/react-checkbox';
import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  cursor: pointer;
  font-size: 1.4rem;
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CheckboxIndicator = styled(RadixUICheckbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  margin-bottom: 0.1rem;
  color: ${({ theme }) => theme.colors.grey['100']};
`;
export const CheckboxRoot = styled(RadixUICheckbox.Root)`
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ disabled, theme: { colors } }) =>
    disabled
      ? `1px solid ${colors.grey['500']}`
      : `1px solid ${colors.grey['900']}`};

  background-color: ${({ theme }) => theme.colors.grey['100']};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey['200']};
  }

  &[data-state='checked'] {
    border-color: ${({ theme }) => theme.colors.primary.dark};
    background-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
