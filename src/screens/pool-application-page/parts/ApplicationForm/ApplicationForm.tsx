import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import { useSendEmail } from '~/adapters/emailAdapter';
import { useAppendGoogleSheetById } from '~/adapters/sheetAdapter';
import { SwimmingCategoryId } from '~/types';
import { Button, Flex } from '~/ui/components/atoms';
import { getDayAbbreviationWithoutDiacritics } from '~/utils/day';
import { calculatePriceAfterDiscount } from '~/utils/price';
import { SuccessApplicationDialog } from '../../components';
import {
  AdultCourseForm,
  KidCourseForm,
  ScholarCourseForm,
} from '../../components/FormItems';
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
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const router = useRouter();

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
  const { handleSubmit, watch, getValues, reset } = form;

  const gdprConsent = watch('gdprConsent');

  const lectureId = watch('lessonsDayTime');
  const lectureById = getLectureById(lectureId ?? '');

  const isSchoolOrKindergartenCourse =
    categoryId === SwimmingCategoryId.KINDERGARTEN ||
    categoryId === SwimmingCategoryId.SCHOOL;

  const isKidCourse =
    categoryId === SwimmingCategoryId.BASIC ||
    categoryId === SwimmingCategoryId.ADVANCED ||
    categoryId === SwimmingCategoryId.CONDITION;

  const isAdultCourse = categoryId === SwimmingCategoryId.ADULT;

  const handleFormSubmit = async (data: ApplicationFormValues) => {
    const dataUpdated = {
      ...data,
      lessonsDayTime: `${getDayAbbreviationWithoutDiacritics(Number(lectureById?.dayId))}_${lectureById?.timeFrom}`,
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
          dayId: Number(lectureById?.dayId),
          time: String(lectureById?.timeFrom),
          priceWithDiscount: Math.floor(
            calculatePriceAfterDiscount(
              dataUpdated.lessonsPrice ?? 0,
              lectureById?.discount ?? 0
            )
          ),
        });

        setShowSuccessDialog(true);
      }
    } catch (error) {
      console.error('Error sending email or appending to Google Sheet:', error);
    }
  };

  const handleResendEmail = async () => {
    const { email, contactPersonEmail } =
      getValues() as ScholarCourseFormFields &
        KidCourseFormFields &
        AdultCourseFormFields;

    if (templateId) {
      await sendEmail({
        email: email ?? contactPersonEmail,
        templateId,
        dayId: Number(lectureById?.dayId),
        time: String(lectureById?.timeFrom),
        priceWithDiscount: Math.floor(
          calculatePriceAfterDiscount(
            watch('lessonsPrice') ?? 0,
            lectureById?.discount ?? 0
          )
        ),
      });

      setShowSuccessDialog(true);
    }
  };

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
    reset();
  };

  return (
    <FormProvider {...form}>
      <ToastContainer />
      {showSuccessDialog && (
        <SuccessApplicationDialog
          open={showSuccessDialog}
          onClose={handleCloseSuccessDialog}
          onResendEmail={handleResendEmail}
          onHomePageReturn={() => router.push('/bazeny/luzanky')}
        />
      )}
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
