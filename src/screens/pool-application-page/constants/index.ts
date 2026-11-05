export const testEmail = {
  email: process.env.NEXT_PUBLIC_FORM_TEST_EMAIL ?? '',
  firstName: 'Test',
  lastName: 'Osteron',
  dayId: 1,
  time: '10:00',
  priceWithDiscount: 101010,
};

export const testFormData = {
  firstName: 'Test',
  lastName: 'Osteron',
  gender: 'M',
  personalIdNum: '111111/2211',
  phone: '777777777',
  email: process.env.NEXT_PUBLIC_FORM_TEST_EMAIL,
  city: 'Random',
  streetAddress: 'Randomova',
  houseNumber: '123',
  postCode: '12345',
  dateOfBirth: '2020-01-01',
  nationality: '1',
  gdprConsent: true,
};
