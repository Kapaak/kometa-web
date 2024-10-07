import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { SlidersHorizontal } from '@phosphor-icons/react';

import {
  ageOptions,
  childrenGenderOptions,
  dayOptions,
  skillLevelOptions,
  timeOptions,
} from '~/constants/options';
import { useGetSwimmingPoolOptions } from '~/hooks/useCoursesOptions';
import { Flex, Hidden, Text } from '~/ui/components/atoms';
import {
  ControlledMultiSelect,
  ControlledSelect,
} from '~/ui/components/molecules';
import { filterEmptyValuesFromObject } from '~/utils/filter';

import { useAvailableCoursesFilterContext } from '../../contexts';
import { AvailableCoursesFilterDrawer } from '../AvailableCoursesFilterDrawer';

import * as S from './AvailableCoursesFilter.style';

interface AvailableCoursesFilterProps {}

type FormData = {
  gender?: string;
  day?: string[] | string;
  time?: string[] | string;
  place?: string[] | string;
  age?: string;
  skillLevel?: string;
};

export function AvailableCoursesFilter({}: AvailableCoursesFilterProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const { filter, setFilter } = useAvailableCoursesFilterContext();

  const { data: swimmingPoolOptions, isLoading: isSwimmingPoolLoading } =
    useGetSwimmingPoolOptions();

  const form = useForm<FormData>({
    values: {
      gender: filter?.gender,
      day: Boolean(filter?.day)
        ? Array.isArray(filter?.day)
          ? filter?.day
          : [filter?.day]
        : '',
      age: filter?.age,
      skillLevel: filter?.skillLevel,
      time: Boolean(filter?.time)
        ? Array.isArray(filter?.time)
          ? filter?.time
          : [filter?.time]
        : '',
      place: Boolean(filter?.place)
        ? Array.isArray(filter?.place)
          ? filter?.place
          : [filter?.place]
        : '',
    },
  });
  const { watch } = form;

  const updateQueryParams = useCallback(
    (newParams: { [key: string]: string }) => {
      router.push(
        {
          pathname: router.pathname,
          query: newParams,
        },
        undefined,
        { shallow: true }
      );
    },
    [router]
  );

  const handleDrawerSubmit = (data: FormData) => {
    const filteredValues = filterEmptyValuesFromObject(data);

    updateQueryParams(filteredValues);

    setFilter(filteredValues);
  };

  useEffect(() => {
    const subscription = watch((values, { name }) => {
      //make sure that we are updating only when controlled value is changed and not on rerender
      if (name) {
        const filteredValues = filterEmptyValuesFromObject(values);

        updateQueryParams(filteredValues);

        setFilter(filteredValues);
      }
    });
    return () => subscription.unsubscribe();
  }, [setFilter, updateQueryParams, watch]);

  return (
    <S.AvailableCoursesFilter>
      <Flex justify="space-between" align="center">
        <S.AvailableCoursesFilterTitle>Filtr</S.AvailableCoursesFilterTitle>
        <Hidden up="md">
          <AvailableCoursesFilterDrawer
            open={drawerOpen}
            isSwimmingPoolLoading={isSwimmingPoolLoading}
            swimmingPoolOptions={swimmingPoolOptions}
            onClose={() => setDrawerOpen(false)}
            onSubmit={handleDrawerSubmit}
            action={
              <S.FilterButton onClick={() => setDrawerOpen(true)}>
                <Text variant="body2">Nastavení</Text> <SlidersHorizontal />
              </S.FilterButton>
            }
          />
        </Hidden>
      </Flex>

      <Hidden down="md">
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
          </S.ControlledItems>
        </FormProvider>
      </Hidden>
    </S.AvailableCoursesFilter>
  );
}
