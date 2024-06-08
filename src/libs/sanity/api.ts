import { groq } from 'next-sanity';

import {
  SanityAvailableCourse,
  SanityCamps,
  SanityKidsCourse,
} from '~/domains';
import { Gender, SwimmingVariant } from '~/types';

import { client } from './config';

interface Filters {
  age?: number;
  gender?: Gender;
  skillLevel?: SwimmingVariant;
  day?: string;
  time?: string;
  place?: string;
  lastId?: string;
  pageSize?: number;
}

export async function getAvailableCourses(
  filters: Filters = {}
): Promise<SanityAvailableCourse[]> {
  let filterQuery = [];

  if (filters?.age) {
    filterQuery.push(
      `age.ageFrom <= ${filters.age} && age.ageTo >= ${filters.age}`
    );
  }

  //TODO: not specified in SANITY yet
  // if (filters?.gender) {
  //   filterQuery += `[gender == "${filters.gender}"]`;
  // }

  //TODO: preferovana mista

  if (filters?.day) {
    filterQuery.push(`dayId in [${filters?.day}]`);
  }

  if (filters?.time) {
    const hours = Array.isArray(filters.time.split(','))
      ? filters.time.split(',').map((time) => `"${time.concat(':00')}"`)
      : [`"${filters.time.concat(':00')}"`];

    filterQuery.push(`[${hours}] match timeFrom`);
  }

  if (filters?.skillLevel) {
    filterQuery.push(`["${filters.skillLevel}"] match categoryId`);
  }

  const mergedFilter = filterQuery.join(' && ');

  const queryAvailableCourses = groq`*[_type == "kidsCourse" && _id > $lastId][${mergedFilter}]{"id":_id,"priceYear":price.priceYear,"priceSemester":price.priceSemester,isFull,categoryId,dayId,timeFrom,timeTo,"ageFrom":age.ageFrom,"ageTo":age.ageTo,
  ...(swimmingPool->{"name":name,"alt":image.alt,"image":image{asset->{...,metadata}},"url":url,"privateSwimmingPool":privateSwimmingPool,"isSchoolOrKindergartenAvailable":isSchoolOrKindergartenAvailable})
  }[] [0...$pageSize]`;

  const course = await client.fetch(queryAvailableCourses, {
    lastId: filters.lastId,
    pageSize: filters.pageSize,
  });

  return course;
}

export async function getKidsCourses(): Promise<SanityKidsCourse[]> {
  const queryKidsCourses = groq`*[_type == "kidsCourse"]{"id":_id,"priceYear":price.priceYear,"priceSemester":price.priceSemester,isFull,categoryId,dayId,timeFrom,timeTo,"ageFrom":age.ageFrom,"ageTo":age.ageTo,"swimmingPoolId":swimmingPool->._id,"name":swimmingPool->.name,"alt":swimmingPool->.image.alt,"image":swimmingPool->.image{asset->{...,metadata}},"url":swimmingPool->.url,"privateSwimmingPool":swimmingPool->.privateSwimmingPool,"isSchoolOrKindergartenAvailable":swimmingPool->.isSchoolOrKindergartenAvailable}[]`;

  const course = await client.fetch(queryKidsCourses);

  return course;
}

export async function getCamps(): Promise<SanityCamps[]> {
  const queryCamps = groq`*[_type == "camp"]{"id":_id,name,"alt":image.alt,image{asset->{...,metadata}},url,"tags":tag}[]`;

  const course: SanityCamps[] = await client.fetch(queryCamps);

  return course;
}
