import { useFormContext } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { useApplicationFormContext } from '~/screens/pool-application-page/contexts/ApplicationFormContext';
import {
  A,
  Headline,
  RadioGroup,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';
import {
  ControlledCheckbox,
  ControlledInput,
  ControlledSelect,
} from '~/ui/components/molecules';
import { midTermOptions } from '~/utils/options';
import * as FormItems from '../FormItems.style';

export function ScholarCourseForm() {
  const theme = useTheme();
  const { primary } = theme.colors;

  const { lectures, getLectureById, availableLecturesOptions } =
    useApplicationFormContext();

  const { watch } = useFormContext();

  const selectedLectureId = watch('lessonsDayTime');

  const selectedLecture = getLectureById(selectedLectureId);
  return (
    <VerticalStack gap="1rem">
      <FormItems.FormContainer>
        <FormItems.FormColumn>
          <Headline size="small" color="inherit">
            Údaje
          </Headline>

          <FormItems.FormColumnItems>
            <ControlledInput
              name="schoolName"
              label="Název školy / školky"
              placeholder="Název školy / školky"
              // required="Jméno nesmí být prázdné" --> tohle nastavit v useForm
            />
            <ControlledInput
              name="address"
              label="Adresa"
              placeholder="Adresa"
              // required="Adresa musí být vyplněna."
            />
            <ControlledInput
              name="identifier"
              placeholder="IČ nebo DIČ"
              label="IČ nebo DIČ"
              // pattern={{
              //   value: /^\d+$/,
              //   message: "IČ nebo DIČ musí být číslo.",
              // }}
              // required="IČ nebo DIČ musí být vyplněno."
            />
            <ControlledInput
              name="childrenCount"
              placeholder="Počet dětí"
              required="Počet dětí musí být vyplněn"
              type="number"
              label="Počet dětí"
              // pattern={/^(?=.*1)(?=.*[2-9]|30)[1-9]\d?$/}
            />
            <ControlledSelect
              name="midTerm"
              placeholder="Pololetí"
              // required="Pololetí musí být vyplněno"
              options={midTermOptions}
            />
            <ControlledInput name="notes" placeholder="Poznámky" />
          </FormItems.FormColumnItems>
        </FormItems.FormColumn>

        <FormItems.FormColumn>
          <Headline size="small" color="inherit">
            Kontaktní osoba
          </Headline>

          <FormItems.FormColumnItems>
            <ControlledInput
              name="contactPerson"
              label="Jméno kontaktní osoby"
              placeholder="Jméno kontaktní osoby"
              required="Kontaktní osoba musí být vyplněna"
            />
            <ControlledInput
              name="contactPersonPhone"
              label="Telefon kontaktní osoby"
              placeholder="Telefon kontaktní osoby"
              required="Telefon kontaktní osoby musí být vyplněn"
            />
            <ControlledInput
              name="contactPersonEmail"
              label="Email kontaktní osoby"
              placeholder="Email kontaktní osoby"
              required="Email kontaktní osoby musí být vyplněn"
            />
          </FormItems.FormColumnItems>
        </FormItems.FormColumn>
      </FormItems.FormContainer>

      <FormItems.FormColumn>
        <Headline size="small" color="inherit">
          Počet lekcí
        </Headline>

        <FormItems.FormColumnItems>
          <RadioGroup
            name="lessonsPrice"
            discount={0}
            options={[
              {
                label: '1x týdně',
                value: 20_000,
                lectureFrequency: 4,
              },
              {
                label: '2x týdně',
                value: 30_000,
                lectureFrequency: 4,
              },
            ]}
          />
          <Text variant="body2">
            V případě individuálních požadavků kontaktujte
            plavaniluzanky@kometaplavani.cz
          </Text>
        </FormItems.FormColumnItems>
      </FormItems.FormColumn>

      <FormItems.FormColumn>
        <Headline size="small" color="inherit">
          Vybraný termín a čas
        </Headline>

        <FormItems.FormColumnItems>
          <ControlledSelect
            placeholder="Vyberte termín a čas"
            name="lessonsDayTime"
            options={availableLecturesOptions}
          />
        </FormItems.FormColumnItems>

        <ControlledCheckbox
          name="gdprConsent"
          label={
            <Text>
              Potvrzuji, že jsem se seznámil(a) s{' '}
              <Text as="span" color={primary.main}>
                <A
                  href="/files/VSEOBECNE-PODMINKY.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  podmínkami přijetí
                </A>{' '}
              </Text>
              a že s nimi souhlasím.
            </Text>
          }
        />
      </FormItems.FormColumn>
    </VerticalStack>
  );
}
