import { useFormContext } from 'react-hook-form';
import { useTheme } from 'styled-components';
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
import { genderOptions } from '~/utils/options';
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

  return (
    <VerticalStack gap="1rem">
      <FormItems.FormContainer>
        <FormItems.FormColumn>
          <Headline size="small" color="inherit">
            Údaje
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
            />
            <ControlledInput
              name="personalIdNum"
              label="Rodné číslo"
              placeholder="Rodné číslo (př. 045421/1234)"
              // pattern={{
              //   value: /\d{4}([.,\/]\d{4})/,
              //   message:
              //     "Rodné číslo v nesprávném formátu. Příklad: 045421/1234.",
              // }}
              required="Rodné číslo musí být vyplněno."
            />
            <ControlledInput
              name="dateOfBirth"
              label="Datum narození"
              placeholder="Datum narození"
              required="Datum narození musí být vyplněno."
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
              // pattern={{
              //   value: /\S+@\S+\.\S+/,
              //   message:
              //     'Platný email musí obsahovat @ (př. novak.filip@email.cz).',
              // }}
              required="Email musí být vyplněn."
            />
            <ControlledInput
              name="address"
              label="Adresa a číslo popisné"
              placeholder="Adresa a číslo popisné"
              required="Adresa musí být vyplněna"
            />
            <ControlledInput
              name="city"
              label="Město"
              placeholder="Město"
              required="Město musí být vyplněno."
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
          <RadioGroup
            name="lessonsPrice"
            discount={selectedLecture?.discount}
            options={[
              {
                label: '1x týdně',
                value:
                  selectedLecture?.priceSemester ??
                  lectures?.[0]?.priceSemester ??
                  0,
                lectureFrequency: 1,
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
