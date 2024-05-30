import { FormProvider, useForm } from 'react-hook-form';

import {
  ageOptions,
  dayOptions,
  placeOptions,
  skillLevelOptions,
  timeOptions,
} from '~/constants/options';
import { ControlledSelect } from '~/ui/components/molecules';

import * as S from './AvailableCoursesFilter.style';

interface AvailableCoursesFilterProps {}

export function AvailableCoursesFilter({}: AvailableCoursesFilterProps) {
  const form = useForm();

  return (
    <div>
      <S.AvailableCoursesFilterTitle>Filtr</S.AvailableCoursesFilterTitle>
      <FormProvider {...form}>
        <S.ControlledItems>
          <ControlledSelect
            name="place"
            placeholder="Preferovaná místa"
            options={placeOptions}
          />
          <ControlledSelect
            name="skillLevel"
            placeholder="Aktuální plavecká úroveň"
            options={skillLevelOptions}
          />
          <ControlledSelect
            name="day"
            placeholder="Preferované dny"
            options={dayOptions}
          />
          <ControlledSelect
            name="time"
            placeholder="Preferované časy"
            options={timeOptions}
          />
          <ControlledSelect
            name="age"
            placeholder="Věk dítěte"
            options={ageOptions}
          />
        </S.ControlledItems>
      </FormProvider>
    </div>
  );
}
