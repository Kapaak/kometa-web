import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

import { Select, SelectProps } from '../../atoms';

type ContainerProps<T extends FieldValues> = Pick<
  ControllerProps<T>,
  'name' | 'control' | 'rules'
>;
type FieldProps = SelectProps;

export type ControlledSelectProps<T extends FieldValues> = ContainerProps<T> &
  FieldProps;

export function ControlledSelect<T extends FieldValues>({
  options,
  placeholder,
  isLoading,
  ...props
}: ControlledSelectProps<T>) {
  return (
    <Controller
      {...props}
      render={({ field }) => (
        <Select
          placeholder={placeholder}
          options={options}
          value={field.value}
          onChange={field.onChange}
          isLoading={isLoading}
        />
      )}
    />
  );
}
