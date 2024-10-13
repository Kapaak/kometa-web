import { FormProvider, useForm } from 'react-hook-form';

import {
  ageOptions,
  childrenGenderOptions,
  dayOptions,
  skillLevelOptions,
  timeOptions,
} from '~/constants/options';
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
  swimmingPoolOptions?: { label: string; value: string }[];
  onSubmit?: (data: FormData) => void;
}

type FormData = {
  gender?: string;
  day?: string[] | string;
  time?: string[] | string;
  place?: string[] | string;
  age?: string;
  skillLevel?: string;
};

export function AvailableCoursesFilterDrawer({
  children,
  isSwimmingPoolLoading,
  swimmingPoolOptions,
  onSubmit,
  onClose,
  ...props
}: AvailableCoursesFilterDrawerProps) {
  const form = useForm<FormData>();
  const { handleSubmit, reset } = form;

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleFormSubmit = (data: FormData) => {
    onSubmit?.(data);

    handleClose();
  };
  console.log('🚀 ~ childrenGenderOptions:', childrenGenderOptions);

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
