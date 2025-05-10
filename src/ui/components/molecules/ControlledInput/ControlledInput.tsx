import { Controller, ValidationRule } from 'react-hook-form';
import { Input, InputProps } from '../../atoms';

interface ControllerNameInputProps
  extends Omit<InputProps, 'required' | 'pattern'> {
  name: string;
  required?: boolean | string;
  pattern?: ValidationRule<RegExp>;
  defaultValue?: string;
}

export const ControlledInput = ({
  name,
  defaultValue = '',
  required = false,
  pattern,
  ...props
}: ControllerNameInputProps) => {
  return (
    <Controller
      name={name}
      rules={{ required, pattern }}
      defaultValue={defaultValue}
      render={({ field: { onBlur, ...restField }, fieldState }) => (
        <Input
          type="text"
          showError={Boolean(fieldState?.error)}
          errorMessage={fieldState?.error?.message}
          {...props}
          {...restField}
        />
      )}
    />
  );
};
