import { PropsWithChildren, Ref, forwardRef } from 'react';

import { Check } from '@phosphor-icons/react/dist/ssr';
import * as RadixUiSelect from '@radix-ui/react-select';

import { Text } from '../../Text';

import * as S from './SelectItem.style';

interface SelectItemProps extends RadixUiSelect.SelectItemProps {
  checked?: boolean;
}

export const SelectItem = forwardRef(
  (
    { children, checked, ...props }: PropsWithChildren<SelectItemProps>,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    return (
      <S.SelectItem
        {...props}
        data-state={checked ? 'checked' : 'unchecked'}
        ref={forwardedRef}
      >
        <RadixUiSelect.ItemText>
          <Text variant="body4">{children}</Text>
        </RadixUiSelect.ItemText>
        {checked && <Check />}
      </S.SelectItem>
    );
  }
);

SelectItem.displayName = 'SelectItem';
