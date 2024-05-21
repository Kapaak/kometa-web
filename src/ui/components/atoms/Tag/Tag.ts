import styled from 'styled-components';

export const Tag = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 10rem;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.7rem 2.4rem;
  text-align: center;
  width: fit-content;
`;
