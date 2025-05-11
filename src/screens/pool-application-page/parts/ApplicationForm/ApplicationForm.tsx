import { FormProvider, useForm } from 'react-hook-form';
import { useSendEmail } from '~/adapters/emailAdapter';
import { useAppendGoogleSheetById } from '~/adapters/sheetAdapter';
import { SwimmingCategoryId } from '~/types';
import { Button, Flex } from '~/ui/components/atoms';
import { getDayAbbreviationWithoutDiacritics } from '~/utils/day';
import { calculatePriceAfterDiscount } from '~/utils/price';
import { useApplicationFormContext } from '../../contexts/ApplicationFormContext';
import {
  AdultCourseFormFields,
  KidCourseFormFields,
  ScholarCourseFormFields,
} from '../../types';
import {
  prepareAdultSpreadsheetValues,
  prepareKidSpreadsheetValues,
  prepareSchoolSpreadsheetValues,
} from '../../utils/spreadsheet';
import {
  AdultCourseForm,
  KidCourseForm,
  ScholarCourseForm,
} from '../FormItems';

export type ApplicationFormValues =
  | KidCourseFormFields
  | AdultCourseFormFields
  | ScholarCourseFormFields;

interface ApplicationFormProps {
  categoryId: string;
  spreadsheetId: number;
  templateId?: string;
}

export function ApplicationForm({
  categoryId,
  spreadsheetId,
  templateId,
}: ApplicationFormProps) {
  const { lectures, getLectureById } = useApplicationFormContext();

  const { appendGoogleSheetById, isLoading } =
    useAppendGoogleSheetById(spreadsheetId);

  const { sendEmail, isLoading: isSendingEmail } = useSendEmail();

  const form = useForm<ApplicationFormValues>({
    values: {
      lessonsPrice: lectures?.[0]?.priceSemester ?? 0,
      gdprConsent: false,
      gender: undefined,
    },
  });
  const { handleSubmit, watch } = form;

  const gdprConsent = watch('gdprConsent');
  const selectedLecture = watch('lessonsDayTime');

  const isSchoolOrKindergartenCourse =
    categoryId === SwimmingCategoryId.KINDERGARTEN ||
    categoryId === SwimmingCategoryId.SCHOOL;

  const isKidCourse =
    categoryId === SwimmingCategoryId.BASIC ||
    categoryId === SwimmingCategoryId.ADVANCED ||
    categoryId === SwimmingCategoryId.CONDITION;

  const isAdultCourse = categoryId === SwimmingCategoryId.ADULT;

  const handleFormSubmit = async (data: ApplicationFormValues) => {
    const lecture = getLectureById(selectedLecture ?? '');
    const dataUpdated = {
      ...data,
      lessonsDayTime: `${getDayAbbreviationWithoutDiacritics(Number(lecture?.dayId))}_${lecture?.timeFrom}`,
    } as ScholarCourseFormFields & KidCourseFormFields & AdultCourseFormFields;

    let values: string[] = [];

    if (isSchoolOrKindergartenCourse) {
      values = prepareSchoolSpreadsheetValues(
        dataUpdated as ScholarCourseFormFields
      );
    } else if (isKidCourse) {
      values = prepareKidSpreadsheetValues(dataUpdated as KidCourseFormFields);
    } else if (isAdultCourse) {
      values = prepareAdultSpreadsheetValues(
        dataUpdated as AdultCourseFormFields
      );
    }

    try {
      await appendGoogleSheetById(values);

      if (templateId) {
        await sendEmail({
          email: dataUpdated?.email ?? dataUpdated?.contactPersonEmail,
          templateId,
          dayId: Number(lecture?.dayId),
          time: String(lecture?.timeFrom),
          priceWithDiscount: Math.floor(
            calculatePriceAfterDiscount(
              dataUpdated.lessonsPrice ?? 0,
              lecture?.discount ?? 0
            )
          ),
        });
      }
    } catch (error) {
      console.error('Error sending email or appending to Google Sheet:', error);
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {isSchoolOrKindergartenCourse && <ScholarCourseForm />}
        {isKidCourse && <KidCourseForm />}
        {isAdultCourse && <AdultCourseForm />}

        <Flex justify="flex-end">
          <Button
            disabled={!gdprConsent || isLoading || isSendingEmail}
            loading={isLoading || isSendingEmail}
          >
            Odeslat
          </Button>
        </Flex>
      </form>
    </FormProvider>
  );
}
