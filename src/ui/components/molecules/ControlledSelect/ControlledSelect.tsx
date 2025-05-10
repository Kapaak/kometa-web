import {
  Controller,
  ControllerProps,
  FieldValues,
  ValidationRule,
} from 'react-hook-form';

import { Select, SelectProps } from '../../atoms';

type ContainerProps<T extends FieldValues> = Pick<
  ControllerProps<T>,
  'name' | 'control' | 'rules'
>;
type FieldProps = SelectProps;

export type ControlledSelectProps<T extends FieldValues> = ContainerProps<T> &
  FieldProps & {
    required?: boolean | string;
    pattern?: ValidationRule<RegExp>;
  };

export function ControlledSelect<T extends FieldValues>({
  options,
  placeholder,
  isLoading,
  pattern,
  required = false,
  ...props
}: ControlledSelectProps<T>) {
  return (
    <Controller
      rules={{ required, pattern }}
      {...props}
      render={({ field, fieldState }) => (
        <Select
          placeholder={placeholder}
          options={options}
          value={field.value}
          onChange={field.onChange}
          isLoading={isLoading}
          showError={Boolean(fieldState?.error)}
          errorMessage={fieldState?.error?.message}
        />
      )}
    />
  );
}
