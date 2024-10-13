import styled from 'styled-components';

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.grey['800']};
  border-radius: 3rem;
  width: 9rem;
  padding: 0.5rem 1rem;
  align-self: flex-end;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey['400']};
  }
`;
