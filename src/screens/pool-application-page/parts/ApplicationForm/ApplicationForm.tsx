import { FormProvider, useForm } from 'react-hook-form';
import { useAppendGoogleSheetById } from '~/adapters/sheetAdapter';
import { SwimmingCategoryId } from '~/types';
import { Button, Flex } from '~/ui/components/atoms';
import { getDayAbbreviationWithoutDiacritics } from '~/utils/day';
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
}

export function ApplicationForm({
  categoryId,
  spreadsheetId,
}: ApplicationFormProps) {
  const { lectures, getLectureById } = useApplicationFormContext();

  const { appendGoogleSheetById, isLoading } =
    useAppendGoogleSheetById(spreadsheetId);

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

  const handleFormSubmit = (data: ApplicationFormValues) => {
    const lecture = getLectureById(selectedLecture ?? '');
    const dataUpdated = {
      ...data,
      lessonsDayTime: `${getDayAbbreviationWithoutDiacritics(Number(lecture?.dayId))}_${lecture?.timeFrom}`,
    };

    if (isSchoolOrKindergartenCourse) {
      const values = prepareSchoolSpreadsheetValues(
        dataUpdated as ScholarCourseFormFields
      );

      return appendGoogleSheetById(values);
    }

    if (isKidCourse) {
      const values = prepareKidSpreadsheetValues(
        dataUpdated as KidCourseFormFields
      );

      return appendGoogleSheetById(values);
    }

    if (isAdultCourse) {
      const values = prepareAdultSpreadsheetValues(
        dataUpdated as AdultCourseFormFields
      );

      return appendGoogleSheetById(values);
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {isSchoolOrKindergartenCourse && <ScholarCourseForm />}
        {isKidCourse && <KidCourseForm />}
        {isAdultCourse && <AdultCourseForm />}

        <Flex justify="flex-end">
          <Button disabled={!gdprConsent || isLoading} loading={isLoading}>
            Odeslat
          </Button>
        </Flex>
      </form>
    </FormProvider>
  );
}
