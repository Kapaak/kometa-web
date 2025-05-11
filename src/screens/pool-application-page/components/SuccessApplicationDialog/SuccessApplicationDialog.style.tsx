import styled, { css } from 'styled-components';
import { Button } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      flex-direction: row;
    }
  `}
`;

export const CreateButton = styled.button`
  color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  gap: 1rem;
  font-size: 1.4rem;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const ReturnButton = styled(Button)`
  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      margin-left: auto;
    }
  `}
`;
