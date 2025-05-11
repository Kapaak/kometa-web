export type KidCourseFormFields = {
  firstName?: string;
  lastName?: string;
  gender?: string;
  personalIdNum?: string;
  dateOfBirth?: string;
  phone?: string;
  email?: string;
  city?: string;
  streetAddress?: string;
  houseNumber?: string;
  houseOrientationNumber?: string;
  postCode?: string;
  alergy?: string;
  healthIssues?: string;
  notes?: string;
  lessonsDayTime?: string;
  lessonsPrice?: number;
  gdprConsent?: boolean;
  nationality?: string;
};

export type AdultCourseFormFields = {
  firstName: string;
  lastName: string;
  gender?: string;
  dateOfBirth?: string;
  phone: string;
  email: string;
  city: string;
  streetAddress?: string;
  houseNumber?: string;
  houseOrientationNumber?: string;
  postCode: string;
  alergy?: string;
  healthIssues?: string;
  notes?: string;
  lessonsDayTime: string;
  lessonsPrice: number;
  gdprConsent: boolean;
  nationality?: string;
};

export type ScholarCourseFormFields = {
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
