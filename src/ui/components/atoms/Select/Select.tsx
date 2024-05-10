import { useMemo, useRef, useState } from 'react';

import { ArrowUp, CaretDown } from '@phosphor-icons/react/dist/ssr';
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

import { Text } from '../Text';

import { SelectItem } from './parts';

import * as S from './Select.style';

export const Select = ({
  placeholder,
  options,
  onChange,
  value,
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState(value ?? '');

  const handleOpenChange = useSelectInteractionFix('#__next');

  const handleValueChange = (value: string) => {
    onChange?.(value);
    setSelectedValue(value);
  };

  const displayValue = useMemo(() => {
    const foundItem = options?.find((option) => option.value === selectedValue);

    return foundItem?.label ?? '';
  }, [options, selectedValue]);

  return (
    <S.Select
      onValueChange={handleValueChange}
      value={selectedValue}
      onOpenChange={handleOpenChange}
    >
      <S.SelectTrigger>
        <S.SelectValue placeholder={<Text variant="body5">{placeholder}</Text>}>
          <Text variant="body5">{displayValue}</Text>
        </S.SelectValue>
        <CaretDown />
      </S.SelectTrigger>
      <RadixUiSelect.Portal>
        <S.SelectContent position="popper">
          <RadixUiSelect.ScrollUpButton>
            <ArrowUp />
          </RadixUiSelect.ScrollUpButton>
          <S.SelectViewport>
            {options?.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                checked={selectedValue === option.value}
              >
                {option.label}
              </SelectItem>
            ))}
          </S.SelectViewport>
          <RadixUiSelect.ScrollDownButton />
        </S.SelectContent>
      </RadixUiSelect.Portal>
    </S.Select>
  );
};

//when using Select, selecting item causes to also click behind the item and can trigger unwanted button clicks
const useSelectInteractionFix = (selectors: string) => {
  const timeoutRef = useRef<number | undefined>();
  const root = document.querySelector<HTMLElement>(selectors);

  if (!root) {
    throw new Error('Root was not found');
  }

  const disableClicks = () => {
    root.style.setProperty('pointer-events', 'none');
  };

  const enableClicks = () => {
    root.style.removeProperty('pointer-events');
    // or root.removeAttribute("style") to remove empty attribute.
  };

  const openChangeHandler = (open: boolean) => {
    if (open) {
      clearTimeout(timeoutRef.current);
      disableClicks();
    } else {
      // Casting it here because Node is returning `Timeout` and this handler will run in the browser.
      timeoutRef.current = setTimeout(enableClicks, 50) as unknown as number;
    }
  };

  return openChangeHandler;
};
