import { useMemo } from 'react';

import { CaretDown } from '@phosphor-icons/react';
import * as RadixUiSelect from '@radix-ui/react-select';

type Option = {
  label: string;
  value: string;
};

export interface SelectProps {
  placeholder?: string;
  value?: string;
  options?: Option[];
  onChange?: (value: string) => void;
}

import { Scrollable } from '../Scrollable';
import { Text } from '../Text';

import { SelectItem } from './parts';

import * as S from './Select.style';

export const Select = ({
  placeholder,
  options,
  onChange,
  value,
}: SelectProps) => {
  const displayValue = useMemo(() => {
    const foundItem = options?.find((option) => option.value === value);

    return foundItem?.label ?? '';
  }, [options, value]);

  return (
    <S.Select
      onValueChange={(val) => {
        //value is for some reason triggered twice (once with empty string)
        if (val) {
          onChange?.(val);
        }
      }}
      value={value}
    >
      <S.SelectTrigger>
        <S.SelectValue placeholder={<Text variant="body5">{placeholder}</Text>}>
          <Text variant="body5">{displayValue}</Text>
        </S.SelectValue>
        <CaretDown />
      </S.SelectTrigger>
      <RadixUiSelect.Portal>
        <S.SelectContent position="popper">
          <Scrollable maxHeight="25rem">
            <S.SelectViewport>
              {options?.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  checked={value === option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </S.SelectViewport>
          </Scrollable>
        </S.SelectContent>
      </RadixUiSelect.Portal>
    </S.Select>
  );
};
