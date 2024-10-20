import { Controller, ValidationRule } from 'react-hook-form';

import { Checkbox, CheckboxProps } from '../../atoms';

type ControlledCheckboxProps = CheckboxProps & {
  name: string;
  disabled?: boolean;
  required?: boolean | string;
  pattern?: ValidationRule<RegExp>;
  defaultValue?: boolean;
};

export function ControlledCheckbox({
  name,
  required,
  pattern,
  defaultValue,
  label,
  disabled = false,
}: ControlledCheckboxProps) {
  return (
    <Controller
      name={name}
      rules={{ required, pattern }}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Checkbox
          label={label}
          onChange={() => field.onChange(!field.value)}
          checked={Boolean(field?.value)}
          disabled={disabled}
        />
      )}
    />
  );
}
