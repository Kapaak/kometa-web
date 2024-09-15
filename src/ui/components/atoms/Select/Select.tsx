import { useMemo, useState } from 'react';
import { ClipLoader } from 'react-spinners';

import { CaretDown } from '@phosphor-icons/react';
import * as RadixUiSelect from '@radix-ui/react-select';
import { useTheme } from 'styled-components';

import { Scrollable } from '../Scrollable';
import { Text } from '../Text';

import { SelectItem } from './parts';

import * as S from './Select.style';

type Option = {
  label: string;
  value: string;
};

export interface SelectProps {
  placeholder?: string;
  value?: string;
  options?: Option[];
  isLoading?: boolean;
  onChange?: (value: string) => void;
}

export const Select = ({
  placeholder,
  options,
  isLoading,
  onChange,
  value,
}: SelectProps) => {
  // I need to set open and setOpen, without it the onClick on SelectItem wouldnt work
  // I want to use onClick because Select onChange wasnt triggering on click to selected item
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const { grey } = theme.colors;

  const displayValue = useMemo(() => {
    const foundItem = options?.find((option) => option.value === value);

    return foundItem?.label ?? placeholder ?? '';
  }, [options, placeholder, value]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleValueChange = (newValue: string) => {
    if (newValue === value) {
      return onChange?.('');
    }
    onChange?.(newValue);

    handleClose();
  };

  return (
    <S.Select value={value} open={open}>
      <S.SelectTrigger onClick={() => setOpen(true)}>
        <S.SelectValue placeholder={<Text variant="body5">{placeholder}</Text>}>
          <Text variant="body5">{displayValue}</Text>
        </S.SelectValue>
        {!isLoading && <CaretDown />}
        {isLoading && (
          <ClipLoader size="18" speedMultiplier={0.5} color={grey['800']} />
        )}
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
                  checked={value === option.value}
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
