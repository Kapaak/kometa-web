import { FormProvider, useForm } from 'react-hook-form';

import { childrenGenderOptions } from '~/constants/options';
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
            name="gender"
            placeholder="Pohlaví dítěte"
            options={childrenGenderOptions}
          />
          {/*  <ControlledMultiSelect
            name="day"
            placeholder="Preferované dny"
            options={dayOptions}
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
          <ControlledMultiSelect
            name="time"
            placeholder="Preferované časy"
            options={timeOptions}
          />
          <ControlledSelect
            name="skillLevel"
            placeholder="Aktuální plavecká úroveň"
            options={skillLevelOptions}
          /> */}
        </S.ControlledItems>
      </FormProvider>
    </div>
  );
}
