import { FormProvider, useForm } from 'react-hook-form';

import {
  ageOptions,
  childrenGenderOptions,
  dayOptions,
  placeOptions,
  skillLevelOptions,
  timeOptions,
} from '~/constants/options';
import {
  ControlledMultiSelect,
  ControlledSelect,
} from '~/ui/components/molecules';

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
            options={placeOptions}
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
        </S.ControlledItems>
      </FormProvider>
    </div>
  );
}
