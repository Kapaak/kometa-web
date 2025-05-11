import dayjs from 'dayjs';
import {
  AdultCourseFormFields,
  KidCourseFormFields,
  ScholarCourseFormFields,
} from '../types';

export function prepareSchoolSpreadsheetValues(
  schoolData: ScholarCourseFormFields
) {
  return [
    schoolData?.schoolName,
    schoolData?.address,
    schoolData?.identifier,
    schoolData?.contactPerson,
    schoolData?.contactPersonPhone,
    schoolData?.contactPersonEmail,
    schoolData?.lessonsPrice,
    schoolData?.childrenCount,
    schoolData?.lessonsDayTime,
    schoolData?.midTerm,
    schoolData?.notes,
  ];
}

export function prepareAdultSpreadsheetValues(
  adultData: AdultCourseFormFields
) {
  const currentDateTime = dayjs().format('DD-MM-YYYY hh:mm');

  return [
    currentDateTime,
    adultData?.lastName,
    adultData?.firstName,
    adultData?.nationality,
    adultData?.personalIdNum,
    adultData?.dateOfBirth,
    adultData?.gender,
    adultData?.streetAddress,
    adultData?.houseNumber,
    adultData?.houseOrientationNumber,
    adultData?.city,
    adultData?.postCode,
    adultData?.email,
    adultData?.phone,
    adultData?.lessonsDayTime,
    adultData?.lessonsPrice,
    adultData?.alergy,
    adultData?.healthIssues,
    adultData?.notes,
  ];
}

export function prepareKidSpreadsheetValues(kidData: KidCourseFormFields) {
  const currentDateTime = dayjs().format('DD-MM-YYYY hh:mm');

  return [
    currentDateTime,
    kidData?.lastName,
    kidData?.firstName,
    kidData?.nationality,
    kidData?.personalIdNum,
    kidData?.dateOfBirth,
    kidData?.gender,
    kidData?.streetAddress,
    kidData?.houseNumber,
    kidData?.houseOrientationNumber,
    kidData?.city,
    kidData?.postCode,
    kidData?.email,
    kidData?.phone,
    kidData?.lessonsDayTime,
    kidData?.lessonsPrice,
    kidData?.alergy,
    kidData?.healthIssues,
    kidData?.notes,
  ];
}
