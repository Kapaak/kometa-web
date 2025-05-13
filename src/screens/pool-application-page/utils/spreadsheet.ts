import dayjs from 'dayjs';
import {
  AdultCourseFormFields,
  KidCourseFormFields,
  ScholarCourseFormFields,
} from '../types';

export function prepareSchoolSpreadsheetValues(
  schoolData: ScholarCourseFormFields
): string[] {
  return [
    String(schoolData?.schoolName ?? ''),
    String(schoolData?.address ?? ''),
    String(schoolData?.identifier ?? ''),
    String(schoolData?.contactPerson ?? ''),
    String(schoolData?.contactPersonPhone ?? ''),
    String(schoolData?.contactPersonEmail ?? ''),
    String(schoolData?.lessonsPrice ?? ''),
    String(schoolData?.childrenCount ?? ''),
    String(schoolData?.lessonsDayTime ?? ''),
    String(schoolData?.midTerm ?? ''),
    String(schoolData?.notes ?? ''),
  ];
}

export function prepareAdultSpreadsheetValues(
  adultData: AdultCourseFormFields
): string[] {
  const currentDateTime = dayjs().format('DD-MM-YYYY hh:mm');

  return [
    currentDateTime,
    String(adultData?.lastName ?? ''),
    String(adultData?.firstName ?? ''),
    String(adultData?.nationality ?? ''),
    String(adultData?.personalIdNum ?? ''),
    String(adultData?.dateOfBirth ?? ''),
    String(adultData?.gender ?? ''),
    String(adultData?.streetAddress ?? ''),
    String(adultData?.houseNumber ?? ''),
    String(adultData?.houseOrientationNumber ?? ''),
    String(adultData?.city ?? ''),
    String(adultData?.postCode ?? ''),
    String(adultData?.email ?? ''),
    String(adultData?.phone ?? ''),
    String(adultData?.lessonsDayTime ?? ''),
    String(adultData?.lessonsPrice ?? ''),
    String(adultData?.alergy ?? ''),
    String(adultData?.healthIssues ?? ''),
    String(adultData?.notes ?? ''),
  ];
}

export function prepareKidSpreadsheetValues(
  kidData: KidCourseFormFields
): string[] {
  const currentDateTime = dayjs().format('DD-MM-YYYY hh:mm');

  return [
    currentDateTime,
    String(kidData?.lastName ?? ''),
    String(kidData?.firstName ?? ''),
    String(kidData?.nationality ?? ''),
    String(kidData?.personalIdNum ?? ''),
    String(kidData?.dateOfBirth ?? ''),
    String(kidData?.gender ?? ''),
    String(kidData?.streetAddress ?? ''),
    String(kidData?.houseNumber ?? ''),
    String(kidData?.houseOrientationNumber ?? ''),
    String(kidData?.city ?? ''),
    String(kidData?.postCode ?? ''),
    String(kidData?.email ?? ''),
    String(kidData?.phone ?? ''),
    String(kidData?.lessonsDayTime ?? ''),
    String(kidData?.lessonsPrice ?? ''),
    String(kidData?.alergy ?? ''),
    String(kidData?.healthIssues ?? ''),
    String(kidData?.notes ?? ''),
  ];
}
