import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ArrowRight } from '@phosphor-icons/react';
import * as RadixAccordion from '@radix-ui/react-accordion';

import {
  ageOptions,
  childrenGenderOptions,
  dayOptions,
  skillLevelOptions,
  timeOptions,
} from '~/constants/options';
import { useGetSwimmingPoolOptions } from '~/hooks/useCoursesOptions';
import { Flex, MaxWidth, VerticalStack } from '~/ui/components/atoms';
import {
  ControlledMultiSelect,
  ControlledSelect,
} from '~/ui/components/molecules';
import { filterEmptyValuesFromObject } from '~/utils/filter';

import * as S from './QuestionnaireSection.style';

type QuestionaireFormData = {
  gender?: string;
  day?: string;
  time?: string[] | string;
  place?: string[] | string;
  age?: string;
  skillLevel?: string;
};

export function QuestionnaireSection() {
  //this will be used when switching between swimming courses and summer camps
  const [open, setOpen] = useState(true);

  const router = useRouter();

  const form = useForm<QuestionaireFormData>();

  const { handleSubmit } = form;

  const { data: swimmingPoolOptions, isLoading: isSwimmingPoolLoading } =
    useGetSwimmingPoolOptions();

  const onSubmit = (formData: QuestionaireFormData) => {
    router.push({
      pathname: '/dostupne-lekce',
      query: filterEmptyValuesFromObject(formData),
    });
  };

  return (
    <MaxWidth variant="small" as="section">
      <S.QuestionnaireRoot
        type="single"
        collapsible
        value={open ? 'questionnaire' : ''}
      >
        <RadixAccordion.Item value="questionnaire">
          <RadixAccordion.Header>
            <Flex>
              <VerticalStack>
                <S.Title variant="h3">Vyplňte si dotazník</S.Title>
                <S.QuestionaireDescription variant="body2">
                  Jestli nevíte, kam se přihláit, vyzkoušejte náš dotazník.
                  Výsledky vám ukážou plavání pro děti, letní tábory a
                  synchronizované plavání.
                </S.QuestionaireDescription>
              </VerticalStack>
              {/* <div>plavecke kurzy, letni tabory</div> */}
            </Flex>
          </RadixAccordion.Header>

          <S.QuestionnaireContent>
            <FormProvider {...form}>
              <S.FormContent onSubmit={handleSubmit(onSubmit)}>
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
                  <ControlledMultiSelect
                    name="time"
                    placeholder="Preferované časy"
                    options={timeOptions}
                  />
                  <ControlledSelect
                    name="skillLevel"
                    placeholder="Aktuální plavecká úroveň"
                    options={skillLevelOptions}
                  />
                </S.ControlledItems>

                <S.SubmitButton icon={<ArrowRight size={20} />}>
                  Zobrazit výsledky
                </S.SubmitButton>
              </S.FormContent>
            </FormProvider>
          </S.QuestionnaireContent>
        </RadixAccordion.Item>
      </S.QuestionnaireRoot>
    </MaxWidth>
  );
}
