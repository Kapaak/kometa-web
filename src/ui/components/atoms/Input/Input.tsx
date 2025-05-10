import * as S from './Input.style';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  showError?: boolean;
  label?: string;
}

export function Input({
  label,
  errorMessage,
  showError,
  ...props
}: InputProps) {
  return (
    <S.InputContainer>
      <S.Input hasError={showError} {...props} />
      <S.Label>{label}</S.Label>
      {showError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputContainer>
  );
}
