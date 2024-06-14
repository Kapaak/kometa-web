import { groq } from 'next-sanity';

import {
  SanityAvailableCourse,
  SanityCamps,
  SanityKidsCourse,
  SanitySwimmingPool,
} from '~/domains';
import { SwimmingVariant } from '~/types';

import { client } from './config';

interface Filters {
  age?: number;
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

  if (filters?.place) {
    const places = Array.isArray(filters.place.split(','))
      ? filters.place.split(',').map((place) => `"${place}"`)
      : [`"${filters.place}"`];

    filterQuery.push(`[${places}] match swimmingPool->slug.current`);
  }

  if (filters?.day) {
    filterQuery.push(`dayId in [${filters?.day}]`);
  }

  if (filters?.time) {
    const minutes = ['00', '15', '30', '45'];
    const hours = filters.time.split(',');
    const times = hours.flatMap((hour) =>
      minutes.map((minute) => `"${hour}:${minute}"`)
    );

    filterQuery.push(`[${times.join(',')}] match timeFrom`);
  }

  if (filters?.skillLevel) {
    filterQuery.push(`["${filters.skillLevel}"] match categoryId`);
  }

  //TODO: need to comment out mergedFilter to generate FE sanity types
  const mergedFilter = filterQuery.join(' && ');

  const queryAvailableCourses = groq`*[_type == "kidsCourse" && _id > $lastId][${mergedFilter}]{"id":_id,"priceYear":price.priceYear,"priceSemester":price.priceSemester,isFull,categoryId,dayId,timeFrom,timeTo,"ageFrom":age.ageFrom,"ageTo":age.ageTo,
  ...(swimmingPool->{"name":name,"slug":slug.current,"alt":image.alt,"image":image{asset->{...,metadata}},"url":url,"privateSwimmingPool":privateSwimmingPool,"isSchoolOrKindergartenAvailable":isSchoolOrKindergartenAvailable})
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

export async function getSwimmingPools(): Promise<SanitySwimmingPool[]> {
  const querySwimmingPools = groq`*[_type == "swimmingPool"]{"id":_id,name,"slug":slug.current,location,"alt":image.alt,image{asset->{...,metadata}},url,privateSwimmingPool}[]`;

  const course = await client.fetch(querySwimmingPools);

  return course;
}
