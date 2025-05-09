import { FormProvider, useForm } from 'react-hook-form';
import { SwimmingCategoryId } from '~/types';
import { Button, Flex } from '~/ui/components/atoms';
import {
  AdultCourseForm,
  KidCourseForm,
  ScholarCourseForm,
} from '../FormItems';

export type ApplicationFormValues =
  | {
      //skolky & skoly
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
    }
  | {
      // categoryId: SwimmingCategoryId.OTHER_CATEGORY; // Replace with actual category
      // Define fields specific to this category
      otherField1: string;
      otherField2: number;
    };
interface ApplicationFormProps {
  categoryId: string;
}

export function ApplicationForm({ categoryId }: ApplicationFormProps) {
  const form = useForm<ApplicationFormValues>();
  const { handleSubmit } = form;

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
          <Button>Odeslat</Button>
        </Flex>
      </form>
    </FormProvider>
  );
}
