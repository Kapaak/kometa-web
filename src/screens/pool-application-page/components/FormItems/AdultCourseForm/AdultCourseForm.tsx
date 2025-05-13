import { useFormContext } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { A, Headline, Text, VerticalStack } from '~/ui/components/atoms';
import {
  ControlledCheckbox,
  ControlledInput,
  ControlledRadio,
  ControlledSelect,
} from '~/ui/components/molecules';
import { binaryOptions, genderOptions } from '~/utils/options';
import { useApplicationFormContext } from '../../../contexts/ApplicationFormContext';
import * as FormItems from '../FormItems.style';

export function AdultCourseForm() {
  const theme = useTheme();
  const { primary } = theme.colors;

  const { lectures, getLectureById, availableLecturesOptions } =
    useApplicationFormContext();

  const { watch } = useFormContext();

  const selectedLectureId = watch('lessonsDayTime');

  const selectedLecture = getLectureById(selectedLectureId);

  const lessonsPriceOptions = [
    {
      label: 'pololetí - 1x týdně',
      value:
        selectedLecture?.priceSemester ??
        (lectures?.[0] ? lectures[0].priceSemester : 0) ??
        0,
      lectureFrequency: 1,
    },
    ...(selectedLecture?.priceYear || (lectures?.[0] && lectures[0].priceYear)
      ? [
          {
            label: 'celý rok - 1x týdně',
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
            Osobní údaje
          </Headline>

          <FormItems.FormColumnItems>
            <ControlledInput
              name="firstName"
              label="Jméno"
              placeholder="Jméno"
              required="Jméno nesmí být prázdné"
            />
            <ControlledInput
              name="lastName"
              label="Příjmení"
              placeholder="Příjmení"
              required="Příjmení nesmí být prázdné"
            />
            <ControlledSelect
              name="gender"
              placeholder="Pohlaví"
              options={genderOptions}
              required="Pohlaví musí být vyplněno"
            />
            <ControlledInput
              name="dateOfBirth"
              label="Datum narození"
              placeholder="Datum narození"
              required="Datum narození musí být vyplněno."
            />
            <ControlledSelect
              name="nationality"
              placeholder="Jste občanem ČR?"
              required="Občanství musí být vyplněno"
              options={binaryOptions}
            />
          </FormItems.FormColumnItems>
        </FormItems.FormColumn>

        <FormItems.FormColumn>
          <Headline size="small" color="inherit">
            Kontaktní údaje
          </Headline>

          <FormItems.FormColumnItems>
            <ControlledInput
              name="phone"
              label="Telefon"
              placeholder="Telefon"
              required="Telefon musí být vyplněn"
            />
            <ControlledInput
              name="email"
              label="E-mail"
              placeholder="E-mail"
              pattern={{
                value: /\S+@\S+\.\S+/,
                message:
                  'Platný email musí obsahovat @ (př. novak.filip@email.cz).',
              }}
              required="Email musí být vyplněn."
            />
            <ControlledInput
              name="city"
              label="Město"
              placeholder="Město"
              required="Město musí být vyplněno."
            />
            <ControlledInput
              name="streetAddress"
              label="Ulice"
              placeholder="Ulice"
            />
            <ControlledInput
              name="houseNumber"
              label="Číslo popisné"
              placeholder="Číslo popisné"
              required="Číslo popisné musí být vyplněno"
            />
            <ControlledInput
              name="houseOrientationNumber"
              label="Orientační číslo"
              placeholder="Orientační číslo"
            />

            <ControlledInput
              name="postCode"
              label="PSČ"
              placeholder="PSČ"
              required="PSČ musí být vyplněno."
            />
          </FormItems.FormColumnItems>
        </FormItems.FormColumn>

        <FormItems.FormColumn>
          <Headline size="small" color="inherit">
            Ostatní
          </Headline>

          <FormItems.FormColumnItems>
            <ControlledInput
              name="alergy"
              label="Alergie"
              placeholder="Alergie"
            />
            <ControlledInput
              name="healthIssues"
              label="Zdravotní potíže"
              placeholder="Upozornění  na zdravotní potíže"
            />
            <ControlledInput
              name="notes"
              label="Poznámky"
              placeholder="Prostor pro poznámky"
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
            required="Termín musí být vyplněný"
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
