import styled from 'styled-components';

export const Document = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey['600']}`};
  max-height: 4rem;
`;

export const DocumentLabel = styled.h4`
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
`;
