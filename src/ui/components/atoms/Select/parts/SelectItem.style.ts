import * as RadixUiSelect from '@radix-ui/react-select';
import styled from 'styled-components';

export const SelectItem = styled(RadixUiSelect.Item)`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.6rem;
  align-items: center;
  position: relative;
  user-select: none;
  cursor: pointer;
  user-select: none;

  &[data-disabled] {
    pointer-events: none;
  }

  &[data-highlighted] {
    outline: none;
    background-color: ${({ theme }) => theme.colors.grey['200']};
  }
`;
