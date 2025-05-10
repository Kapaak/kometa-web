import { FormProvider, useForm } from 'react-hook-form';
import { SwimmingCategoryId } from '~/types';
import { Button, Flex } from '~/ui/components/atoms';
import {
  AdultCourseForm,
  KidCourseForm,
  ScholarCourseForm,
} from '../FormItems';

type KidCourseFormFields = {
  firstName: string;
  lastName: string;
  gender: string;
  personalIdNum: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postCode: string;
  alergy?: string;
  healthIssues?: string;
  notes?: string;
  lessonsDayTime: string;
  lessonsPrice: number;
  gdprConsent: boolean;
};

type AdultCourseFormFields = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postCode: string;
  alergy?: string;
  healthIssues?: string;
  notes?: string;
  lessonsDayTime: string;
  lessonsPrice: number;
  gdprConsent: boolean;
};

type ScholarCourseFormFields = {
  schoolName: string;
  address: string;
  identifier: string;
  childrenCount: number;
  midTerm: string;
  notes?: string;
  contactPerson: string;
  contactPersonPhone: string;
  contactPersonEmail: string;
  lessonsPrice: number;
  lessonsDayTime: string;
  gdprConsent: boolean;
};

export type ApplicationFormValues =
  | KidCourseFormFields
  | AdultCourseFormFields
  | ScholarCourseFormFields;

interface ApplicationFormProps {
  categoryId: string;
}

export function ApplicationForm({ categoryId }: ApplicationFormProps) {
  const form = useForm<ApplicationFormValues>();
  const { handleSubmit, watch } = form;

  const gdprConsent = watch('gdprConsent');

  const isSchoolOrKindergartenCorse =
    categoryId === SwimmingCategoryId.KINDERGARTEN ||
    categoryId === SwimmingCategoryId.SCHOOL;

  const isKidCourse =
    categoryId === SwimmingCategoryId.BASIC ||
    categoryId === SwimmingCategoryId.ADVANCED ||
    categoryId === SwimmingCategoryId.CONDITION;

  const isAdultCourse = categoryId === SwimmingCategoryId.ADULT;

  const handleFormSubmit = (data: ApplicationFormValues) => {
    // Handle form submission logic here
    console.log('Form submitted:', data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {isSchoolOrKindergartenCorse && <ScholarCourseForm />}
        {isKidCourse && <KidCourseForm />}
        {isAdultCourse && <AdultCourseForm />}

        <Flex justify="flex-end">
          <Button disabled={!gdprConsent}>Odeslat</Button>
        </Flex>
      </form>
    </FormProvider>
  );
}
