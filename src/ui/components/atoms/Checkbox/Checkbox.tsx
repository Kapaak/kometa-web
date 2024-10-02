import { ReactNode, useId } from 'react';

import { Check } from '@phosphor-icons/react';
import { CheckedState } from '@radix-ui/react-checkbox';

import * as S from './Checkbox.style';

export type CheckboxProps = {
  label: string | ReactNode;
  disabled?: boolean;
  checked?: CheckedState;
  onChange?: (checked: boolean) => void;
};

export const Checkbox = ({
  label,
  checked,
  onChange,
  ...props
}: CheckboxProps) => {
  const id = useId();
  return (
    <S.Checkbox>
      <S.CheckboxRoot
        onCheckedChange={onChange}
        id={id}
        checked={checked}
        {...props}
      >
        <S.CheckboxIndicator>
          <Check weight="bold" />
        </S.CheckboxIndicator>
      </S.CheckboxRoot>
      <S.CheckboxLabel htmlFor={id}>{label}</S.CheckboxLabel>
    </S.Checkbox>
  );
};
