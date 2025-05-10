import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;

  input:focus + label {
    opacity: 1;
    transform: translateY(-2rem);
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition:
    transform 0.3s ease,
    opacity 0.2s ease;
  pointer-events: none;
  font-size: 1.3rem;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error.main};
  font-size: 1.2rem;
  padding: 0.2rem 0 0 1rem;
`;

export const Input = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== 'hasError',
})<{ hasError?: boolean }>`
  box-shadow: ${({ theme }) => theme.shadows.main};
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.error.main : theme.colors.grey['400']};
  padding: 1.3rem 2rem;
  width: 100%;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.colors.grey['100']};

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
    outline: none;
  }

  &::placeholder {
    font-size: 1.3rem;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.dark};
  }
`;
