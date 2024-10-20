import { FormProvider, useForm } from 'react-hook-form';

import {
  ageOptions,
  childrenGenderOptions,
  dayOptions,
  skillLevelOptions,
  timeOptions,
} from '~/constants/options';
import { AvailableCoursesFilterFormData } from '~/types';
import {
  Button,
  Drawer,
  DrawerProps,
  VerticalStack,
} from '~/ui/components/atoms';
import {
  ControlledMultiSelect,
  ControlledSelect,
} from '~/ui/components/molecules';

interface AvailableCoursesFilterDrawerProps extends DrawerProps {
  isSwimmingPoolLoading?: boolean;
  initialValues?: AvailableCoursesFilterFormData;
  swimmingPoolOptions?: { label: string; value: string }[];
  onSubmit?: (data: AvailableCoursesFilterFormData) => void;
}

export function AvailableCoursesFilterDrawer({
  initialValues,
  isSwimmingPoolLoading,
  swimmingPoolOptions,
  onSubmit,
  onClose,
  children,
  ...props
}: AvailableCoursesFilterDrawerProps) {
  const form = useForm<AvailableCoursesFilterFormData>({
    values: initialValues,
  });
  const { handleSubmit, reset } = form;

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleFormSubmit = (data: AvailableCoursesFilterFormData) => {
    onSubmit?.(data);

    handleClose();
  };

  return (
    <Drawer title="Filtr dostupných kurzů" onClose={handleClose} {...props}>
      <FormProvider {...form}>
        <VerticalStack
          gap="1.6rem"
          as="form"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <ControlledSelect
            name="gender"
            placeholder="Pohlaví dítěte"
            options={childrenGenderOptions}
          />
          <ControlledMultiSelect
            name="day"
            placeholder="Preferované dny"
            options={dayOptions}
          />
          <ControlledMultiSelect
            name="time"
            placeholder="Preferované časy"
            options={timeOptions}
          />
          <ControlledMultiSelect
            name="place"
            placeholder="Preferovaná místa"
            options={swimmingPoolOptions}
            isLoading={isSwimmingPoolLoading}
          />
          <ControlledSelect
            name="age"
            placeholder="Věk dítěte"
            options={ageOptions}
          />
          <ControlledSelect
            name="skillLevel"
            placeholder="Aktuální plavecká úroveň"
            options={skillLevelOptions}
          />
          <Button type="submit">Potvrdit výběr</Button>
        </VerticalStack>
      </FormProvider>
    </Drawer>
  );
}
