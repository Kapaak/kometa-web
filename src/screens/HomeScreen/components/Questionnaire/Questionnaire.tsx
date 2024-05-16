import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import * as RadixAccordion from '@radix-ui/react-accordion';

import {
  ageOptions,
  childrenGenderOptions,
  dayOptions,
  placeOptions,
  skillLevelOptions,
  timeOptions,
} from '~/constants/options';
import {
  Flex,
  IconButton,
  MaxWidth,
  VerticalStack,
} from '~/ui/components/atoms';
import {
  ControlledMultiSelect,
  ControlledSelect,
} from '~/ui/components/molecules';

import * as S from './Questionnaire.style';

interface QuestionnaireProps {}

export function Questionnaire({}: QuestionnaireProps) {
  //this will be used when switching between swimming courses and summer camps
  const [open, setOpen] = useState(true);

  const form = useForm({
    defaultValues: {
      childrenGender: [],
      seleSingle: 'M',
    },
  });

  return (
    <MaxWidth variant="small" as="section">
      <S.QuestionnaireRoot
        type="single"
        collapsible
        value={open ? 'questionnaire' : ''}
      >
        <RadixAccordion.Item value="questionnaire" key="xx">
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
              <S.FormContent>
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
                  />
                </S.ControlledItems>

                <IconButton icon={<ArrowRight size={20} />}>
                  Zobrazit výsledky
                </IconButton>
              </S.FormContent>
            </FormProvider>
          </S.QuestionnaireContent>
        </RadixAccordion.Item>
      </S.QuestionnaireRoot>
    </MaxWidth>
  );
}
