import * as RadixRadio from '@radix-ui/react-radio-group';

import { useId } from 'react';
import { joinValues } from '~/utils/format';
import { formatToCurrency } from '~/utils/number';
import { calculatePriceAfterDiscount } from '~/utils/price';
import { Flex } from '../Flex';
import * as S from './RadioGroup.style';

type Option = {
  label: string;
  value: number;
  lectureFrequency?: number;
};

export interface RadioGroupProps
  extends Omit<RadixRadio.RadioGroupProps, 'onClick'> {
  onClick?: (option: Option) => void;
  discount?: number;
  options?: Option[];
}

export function RadioGroup({
  options,
  discount,
  onClick,
  value,
  ...props
}: RadioGroupProps) {
  const id = useId();
  return (
    <S.RadioGroupRoot
      aria-label="View density"
      value={String(value)}
      {...props}
    >
      {options?.map((option, index) => (
        <Flex key={option.value} direction="row" align="center" gap="2rem">
          <S.RadioGroupItem
            value={String(option.value)}
            id={`${id}-${index}`}
            onClick={() => onClick?.(option)}
          >
            <S.RadioGroupIndicator />
          </S.RadioGroupItem>
          <S.RadioLabel htmlFor={`${id}-${index}`}>
            {option.label}
            {option?.value > 0 && (
              <span>
                {Boolean(discount) ? (
                  <S.DiscountChip>
                    {joinValues(
                      [
                        formatToCurrency(
                          calculatePriceAfterDiscount(
                            Number(option.value) ?? 0,
                            discount ?? 0
                          )
                        ),
                        `sleva ${discount} %`,
                      ],
                      { separator: ' - ' }
                    )}
                  </S.DiscountChip>
                ) : (
                  <S.NonDiscountChip>
                    {formatToCurrency(option.value)}
                  </S.NonDiscountChip>
                )}
              </span>
            )}
          </S.RadioLabel>
        </Flex>
      ))}
    </S.RadioGroupRoot>
  );
}
