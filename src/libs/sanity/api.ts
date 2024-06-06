import { groq } from 'next-sanity';

import { SanityCamps, SanityKidsCourse } from '~/domains';
import { Gender, SwimmingVariant } from '~/types';

import { client } from './config';

interface Filters {
  age?: number;
  gender?: Gender;
  skillLevel?: SwimmingVariant;
  day?: string;
  time?: string;
  place?: string;
}

//will contain camps in future too
export async function getAvailableCourses(
  filters: Filters = {}
): Promise<SanityKidsCourse[]> {
  let filterQuery = '*[_type == "kidCourse"]';

  if (filters?.age) {
    filterQuery += `[basic.age.ageFrom <= ${filters.age} && basic.age.ageTo >= ${filters.age}]`;
  }

  //TODO: not specified in SANITY yet
  // if (filters?.gender) {
  //   filterQuery += `[gender == "${filters.gender}"]`;
  // }

  //TODO: preferovana mista

  let dayFilter = '';
  if (filters?.day) {
    dayFilter = ` && dayId in [${filters?.day}]`;
  }

  let timeFilter = '';
  if (filters?.time) {
    const hours = Array.isArray(filters.time.split(','))
      ? filters.time.split(',').map((time) => `"${time.concat(':00')}"`)
      : [`"${filters.time.concat(':00')}"`];

    timeFilter += ` && [${hours}] match timeFrom`;
  }

  let skillLevelQuery = '';
  if (filters?.skillLevel) {
    skillLevelQuery = groq`${filters.skillLevel}{url,"ageFrom":age.ageFrom,"ageTo":age.ageTo,availableCourses[isFull == false ${dayFilter}${timeFilter}]{"id":_key,dayId,isFull,"priceYear":price.priceYear,"priceSemester":price.priceSemester,timeFrom,timeTo}[]}`;
  } else {
    skillLevelQuery = groq`basic{url,"ageFrom":age.ageFrom,"ageTo":age.ageTo,availableCourses[isFull == false ${dayFilter}${timeFilter}]{"id":_key,dayId,isFull,"priceYear":price.priceYear,"priceSemester":price.priceSemester,timeFrom,timeTo}[]},advanced{url,"ageFrom":age.ageFrom,"ageTo":age.ageTo,availableCourses[isFull == false ${dayFilter}${timeFilter}]{"id":_key,dayId,isFull,"priceYear":price.priceYear,"priceSemester":price.priceSemester,timeFrom,timeTo}[]},condition{url,"ageFrom":age.ageFrom,"ageTo":age.ageTo,availableCourses[isFull == false ${dayFilter}${timeFilter}]{"id":_key,dayId,isFull,"priceYear":price.priceYear,"priceSemester":price.priceSemester,timeFrom,timeTo}[]}`;
  }

  const query = groq`${filterQuery}{"id":_id,name,"alt":image.alt,image{asset->{...,metadata}},url,privateSwimmingPool,isSchoolOrKindergartenAvailable,${skillLevelQuery}}`;

  const course: SanityKidsCourse[] = await client.fetch(query);

  return course;
}

export async function getKidsCourses(
  filters: Filters = {}
): Promise<SanityKidsCourse[]> {
  let filterQuery = '*[_type == "kidCourse"]';

  if (filters?.age) {
    filterQuery += `[basic.age.ageFrom <= ${filters.age} && basic.age.ageTo >= ${filters.age}]`;
  }
  const query = groq`${filterQuery}{"id":_id,name,"alt":image.alt,image{asset->{...,metadata}},url,privateSwimmingPool,isSchoolOrKindergartenAvailable,basic{url,"ageFrom":age.ageFrom,"ageTo":age.ageTo,availableCourses{"id":_key,dayId,isFull,"priceYear":price.priceYear,"priceSemester":price.priceSemester,timeFrom,timeTo}[]},advanced{url,"ageFrom":age.ageFrom,"ageTo":age.ageTo,availableCourses{"id":_key,dayId,isFull,"priceYear":price.priceYear,"priceSemester":price.priceSemester,timeFrom,timeTo}[]},condition{url,"ageFrom":age.ageFrom,"ageTo":age.ageTo,availableCourses{"id":_key,dayId,isFull,"priceYear":price.priceYear,"priceSemester":price.priceSemester,timeFrom,timeTo}[]}}`;

  const course: SanityKidsCourse[] = await client.fetch(query);

  return course;
}

export async function getCamps(): Promise<SanityCamps[]> {
  const query = groq`*[_type == "camp"]{"id":_id,name,"alt":image.alt,image{asset->{...,metadata}},url,"tags":tag}[]`;

  const course: SanityCamps[] = await client.fetch(query);

  return course;
}
