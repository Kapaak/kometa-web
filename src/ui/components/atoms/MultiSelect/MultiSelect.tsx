import { useMemo, useState } from 'react';
import { ClipLoader } from 'react-spinners';

import { CaretDown } from '@phosphor-icons/react';
import * as RadixUiSelect from '@radix-ui/react-select';
import { useTheme } from 'styled-components';

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
  isLoading?: boolean;
  onChange?: (value: string[]) => void;
}

export const MultiSelect = ({
  placeholder,
  options,
  isLoading,
  onChange,
  value,
}: MultiSelectProps) => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const { grey } = theme.colors;

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
        {!isLoading && <CaretDown />}
        {isLoading && (
          <ClipLoader size="1.8rem" speedMultiplier={0.5} color={grey['800']} />
        )}
      </S.MultiSelectTrigger>
      <RadixUiSelect.Portal>
        <S.MultiSelectContent
          position="popper"
          onPointerDownOutside={handleClose}
          onEscapeKeyDown={handleClose}
        >
          <Scrollable maxHeight="25rem">
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
