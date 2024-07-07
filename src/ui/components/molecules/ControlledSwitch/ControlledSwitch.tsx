import { Controller, ValidationRule } from 'react-hook-form';

import { Switch } from '../../atoms';

interface ControlledSwitchProps {
  name: string;
  required?: boolean | string;
  pattern?: ValidationRule<RegExp>;
  defaultValue?: boolean;
  disabled?: boolean;
}

export function ControlledSwitch({
  name,
  required,
  pattern,
  defaultValue = false,
  disabled = false,
}: ControlledSwitchProps) {
  return (
    <Controller
      name={name}
      rules={{ required, pattern }}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Switch
          onClick={() => field.onChange(!field.value)}
          checked={field.value}
          disabled={disabled}
        />
      )}
    />
  );
}
