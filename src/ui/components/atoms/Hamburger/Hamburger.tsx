import * as S from './Hamburger.style';

interface HamburgerProps {
  isOpen?: boolean;
  onChange?: () => void;
}

export function Hamburger({ isOpen = false, onChange }: HamburgerProps) {
  return (
    <S.Hamburger isOpen={isOpen} onClick={onChange}>
      <p></p>
      <p></p>
      <p></p>
    </S.Hamburger>
  );
}
