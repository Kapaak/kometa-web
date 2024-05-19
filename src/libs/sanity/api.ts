import { groq } from 'next-sanity';

import { SanityKidsCourse } from '~/domains';

import { client } from './config';

export async function getKidsCourses(): Promise<SanityKidsCourse[]> {
  const query = groq`*[_type == "kidCourse"]{"id":_id,name,url,privateSwimmingPool,isSchoolOrKindergartenAvailable,basic{url,"ageFrom":age.ageFrom,"ageTo":age.ageTo,availableCourses{"id":_key,dayId,isFull,"priceYear":price.priceYear,"priceSemester":price.priceSemester,timeFrom,timeTo}[]},advanced{url,"ageFrom":age.ageFrom,"ageTo":age.ageTo,availableCourses{"id":_key,dayId,isFull,"priceYear":price.priceYear,"priceSemester":price.priceSemester,timeFrom,timeTo}[]},condition{url,"ageFrom":age.ageFrom,"ageTo":age.ageTo,availableCourses{"id":_key,dayId,isFull,"priceYear":price.priceYear,"priceSemester":price.priceSemester,timeFrom,timeTo}[]}}`;

  const course: SanityKidsCourse[] = await client.fetch(query);

  return course;
}
