import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

import { MultiSelect, MultiSelectProps } from '../../atoms';

type ContainerProps<T extends FieldValues> = Pick<
  ControllerProps<T>,
  'name' | 'control' | 'rules'
>;
type FieldProps = MultiSelectProps;

export type ControlledMultiSelectProps<T extends FieldValues> =
  ContainerProps<T> & FieldProps;

export function ControlledMultiSelect<T extends FieldValues>({
  options,
  placeholder,
  ...props
}: ControlledMultiSelectProps<T>) {
  return (
    <Controller
      {...props}
      render={({ field }) => (
        <MultiSelect
          placeholder={placeholder}
          options={options}
          onChange={field.onChange}
        />
      )}
    />
  );
}
