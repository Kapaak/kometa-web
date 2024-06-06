import { useMemo, useState } from 'react';

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
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value ?? '');

  const handleValueChange = (value: string) => {
    onChange?.(value);
    setOpen(false);
    setSelectedValue(value);
  };

  const displayValue = useMemo(() => {
    const foundItem = options?.find((option) => option.value === selectedValue);

    return foundItem?.label ?? '';
  }, [options, selectedValue]);

  return (
    <S.Select
      open={open}
      onValueChange={handleValueChange}
      value={selectedValue}
    >
      <S.SelectTrigger onClick={() => setOpen(true)}>
        <S.SelectValue placeholder={<Text variant="body5">{placeholder}</Text>}>
          <Text variant="body5">{displayValue}</Text>
        </S.SelectValue>
        <CaretDown />
      </S.SelectTrigger>
      <RadixUiSelect.Portal>
        <S.SelectContent
          position="popper"
          onPointerDownOutside={() => {
            setOpen(false);
          }}
        >
          <Scrollable maxHeight="25rem">
            <S.SelectViewport>
              <RadixUiSelect.Group
                ref={(ref) =>
                  ref?.addEventListener('touchend', (e) => e.preventDefault())
                }
              >
                {options?.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    checked={selectedValue === option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </RadixUiSelect.Group>
            </S.SelectViewport>
          </Scrollable>
        </S.SelectContent>
      </RadixUiSelect.Portal>
    </S.Select>
  );
};
