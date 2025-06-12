import styled, { css } from 'styled-components';
import { minBreakpoint } from '~/utils/dimensions';

export const InfoBar = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  padding: 0.5rem 2rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-right: 1rem;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      text-align: center;
      padding-right: 0;
    }
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  right: 1rem;
  top: 50%;
  translate: 0 -50%;
  cursor: pointer;
  border-radius: 50%;
  background-color: transparent;
  padding: 0.5rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;
