import styled, { css } from 'styled-components';
import { minBreakpoint } from '~/utils/dimensions';

export const FormContainer = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  margin: 2rem 0;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1rem 0;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      gap: 2.4rem;
    }
  `}
`;

export const FormColumnItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
