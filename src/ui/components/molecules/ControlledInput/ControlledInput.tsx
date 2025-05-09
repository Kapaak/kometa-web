import { Controller } from 'react-hook-form';
import { Input, InputProps } from '../../atoms';

interface ControllerNameInputProps extends Omit<InputProps, 'required'> {
  name: string;
  required?: boolean | string;
  defaultValue?: string;
}

export const ControlledInput = ({
  name,
  defaultValue = '',
  required = false,
  ...props
}: ControllerNameInputProps) => {
  return (
    <Controller
      name={name}
      rules={{ required }}
      defaultValue={defaultValue}
      render={({ field: { onBlur, ...restField } }) => (
        <Input type="text" {...props} {...restField} />
      )}
    />
  );
};
