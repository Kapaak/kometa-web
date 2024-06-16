import { useEffect, useMemo, useState } from 'react';

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
    setSelectedValue(value);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const displayValue = useMemo(() => {
    const foundItem = options?.find((option) => option.value === selectedValue);

    return foundItem?.label ?? '';
  }, [options, selectedValue]);

  useEffect(() => {
    setSelectedValue(value ?? '');
  }, [value]);

  return (
    <S.Select
      open={open}
      //cant use onValueChange, because it wasnt working on mobile - first tap only highlighted the item and second tap triggered onClick event
      // onValueChange={handleValueChange}
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
          onPointerDownOutside={handleClose}
          onEscapeKeyDown={handleClose}
        >
          <Scrollable maxHeight="25rem">
            <S.SelectViewport>
              {options?.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  checked={selectedValue === option.value}
                  onClick={() => handleValueChange(option.value)}
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
