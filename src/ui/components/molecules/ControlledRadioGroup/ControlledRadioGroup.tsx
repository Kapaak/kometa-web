import { Controller } from 'react-hook-form';

import { RadioGroup, RadioGroupProps } from '../../atoms';

interface ControlledRadioProps extends RadioGroupProps {
  name: string;
}

export const ControlledRadio = ({ name, ...props }: ControlledRadioProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <RadioGroup
          {...props}
          {...field}
          onClick={(currentField) => field.onChange(currentField.value)}
        />
      )}
    />
  );
};
