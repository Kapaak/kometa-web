import styled from 'styled-components';

export const BorderedLabelText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey['300']};
  padding-bottom: 1rem;

  svg {
    flex-shrink: 0;
  }
`;
