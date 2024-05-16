import { useMemo, useState } from 'react';

import { CaretDown } from '@phosphor-icons/react/dist/ssr';
import * as RadixUiSelect from '@radix-ui/react-select';

type Option = {
  label: string;
  value: string;
};

export interface MultiSelectProps {
  placeholder?: string;
  value?: string;
  options?: Option[];
  onChange?: (value: string[]) => void;
}

import { Scrollable } from '../Scrollable';
import { Text } from '../Text';

import { MultiSelectItem } from './parts';

import * as S from './MultiSelect.style';

export const MultiSelect = ({
  placeholder,
  options,
  onChange,
}: MultiSelectProps) => {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const displayValue = useMemo(() => {
    if (selectedValues.length === 0) {
      return placeholder;
    }

    return `${placeholder} (${selectedValues.length})`;
  }, [placeholder, selectedValues.length]);

  const handleValueChange = (val: string) => {
    const newSelectedValues = selectedValues.includes(val)
      ? selectedValues.filter((v) => v !== val)
      : [...selectedValues, val];

    onChange?.(newSelectedValues);
    setSelectedValues(newSelectedValues);
  };

  return (
    <S.MultiSelect
      // value is empty, because if it was cantrolled by the component it would disallow clicking twice (select and deselect) on the same item
      //therefore this component wont have default value from controller
      value=""
      open={open}
    >
      <S.MultiSelectTrigger onClick={() => setOpen(true)}>
        <Text variant="body5">{displayValue}</Text>
        <CaretDown />
      </S.MultiSelectTrigger>
      <RadixUiSelect.Portal>
        <S.MultiSelectContent
          position="popper"
          onPointerDownOutside={() => {
            setOpen(false);
          }}
        >
          <Scrollable>
            <S.MultiSelectViewport>
              {options?.map((option) => (
                <MultiSelectItem
                  key={option.value}
                  value={option.value}
                  checked={selectedValues?.includes(option.value)}
                  // onTouchEnd={() => {
                  //   //on mobile the onClick is sometimes ignored when clicking too fast
                  //   (isMobile || isTablet) && handleValueChange(option.value);
                  // }}
                  // onClick={() => {
                  //   !isMobile && !isTablet && handleValueChange(option.value);
                  // }}
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
