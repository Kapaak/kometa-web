import { useFormContext } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { useApplicationFormContext } from '~/screens/pool-application-page/contexts/ApplicationFormContext';
import { A, Headline, Text, VerticalStack } from '~/ui/components/atoms';
import {
  ControlledCheckbox,
  ControlledInput,
  ControlledRadio,
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

  const lessonsPriceOptions = [
    {
      label: 'pololetí - 1x týdně (cena je za 1 žáka)',
      value:
        selectedLecture?.priceSemester ??
        (lectures?.[0] ? lectures[0].priceSemester : 0) ??
        0,
      lectureFrequency: 1,
    },
    ...(selectedLecture?.priceYear || (lectures?.[0] && lectures[0].priceYear)
      ? [
          {
            label: 'celý rok - 1x týdně (cena je za 1 žáka)',
            value:
              selectedLecture?.priceYear ??
              (lectures?.[0] ? lectures[0].priceYear : 0) ??
              0,
            lectureFrequency: 1,
          },
        ]
      : []),
  ].filter((option) => typeof option?.value);
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
              errorMessage="Jméno nesmí být prázdné"
              required="Jméno nesmí být prázdné"
            />
            <ControlledInput
              name="address"
              label="Adresa"
              placeholder="Adresa"
              required="Adresa musí být vyplněna."
            />
            <ControlledInput
              name="identifier"
              placeholder="IČ nebo DIČ"
              label="IČ nebo DIČ"
              type="number"
              required="IČ nebo DIČ musí být vyplněno."
            />
            <ControlledInput
              name="childrenCount"
              placeholder="Počet dětí"
              required="Počet dětí musí být vyplněn"
              type="number"
              label="Počet dětí"
            />
            <ControlledSelect
              name="midTerm"
              placeholder="Pololetí"
              required="Pololetí musí být vyplněno"
              options={midTermOptions}
            />
            <ControlledInput
              name="notes"
              label="Poznámky"
              placeholder="Poznámky"
            />
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
              pattern={{
                value: /\S+@\S+\.\S+/,
                message:
                  'Platný email musí obsahovat @ (př. novak.filip@email.cz).',
              }}
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
          <ControlledRadio
            name="lessonsPrice"
            discount={selectedLecture?.discount}
            options={lessonsPriceOptions}
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
            required="Termín musí být vyplněn"
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
