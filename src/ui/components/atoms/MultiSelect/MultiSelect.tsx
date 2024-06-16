import { useMemo, useState } from 'react';

import { CaretDown } from '@phosphor-icons/react';
import * as RadixUiSelect from '@radix-ui/react-select';

import { joinValues } from '~/utils/format';

import { Scrollable } from '../Scrollable';
import { Text } from '../Text';

import { MultiSelectItem } from './parts';

import * as S from './MultiSelect.style';

type Option = {
  label: string;
  value: string;
};

export interface MultiSelectProps {
  placeholder?: string;
  value?: string[];
  options?: Option[];
  onChange?: (value: string[]) => void;
}

export const MultiSelect = ({
  placeholder,
  options,
  onChange,
  value,
}: MultiSelectProps) => {
  const [open, setOpen] = useState(false);

  const displayValue = useMemo(() => {
    if (value?.length === 0) {
      return placeholder;
    }

    return joinValues([placeholder, value?.length && `(${value?.length})`]);
  }, [placeholder, value?.length]);

  const handleValueChange = (val: string) => {
    if (!Array.isArray(value)) {
      onChange?.(value === val ? [] : [val]);
      return;
    }

    onChange?.(
      value.includes(val) ? value.filter((v) => v !== val) : [...value, val]
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <S.MultiSelect
      //@ts-ignore This will output error, because it expects string, but I want multiple string elements
      value={value}
      open={open}
    >
      <S.MultiSelectTrigger onClick={() => setOpen(true)}>
        <Text variant="body5">{displayValue}</Text>
        <CaretDown />
      </S.MultiSelectTrigger>
      <RadixUiSelect.Portal>
        <S.MultiSelectContent
          position="popper"
          onPointerDownOutside={handleClose}
          onEscapeKeyDown={handleClose}
        >
          <Scrollable>
            <S.MultiSelectViewport>
              {options?.map((option) => (
                <MultiSelectItem
                  key={option.value}
                  value={option.value}
                  checked={value?.includes(option.value)}
                  onClick={() => handleValueChange(option.value)}
                >
                  {option.label}
                </MultiSelectItem>
              ))}
            </S.MultiSelectViewport>
          </Scrollable>
          <RadixUiSelect.ScrollDownButton />
        </S.MultiSelectContent>
      </RadixUiSelect.Portal>
    </S.MultiSelect>
  );
};
