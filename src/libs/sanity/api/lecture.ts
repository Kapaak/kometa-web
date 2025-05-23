import { groq } from 'next-sanity';
import { SanityAvailableLecture, SanityLecture } from '~/domains';
import { SwimmingCategoryId } from '~/types';
import { client } from '../config';

interface Pagination {
  lastId?: string;
  pageSize?: number;
}

interface Filters extends Pagination {
  age?: number;
  skillLevel?: SwimmingCategoryId;
  day?: string;
  time?: string;
  place?: string;
}

export async function getAvailableLectures(
  filters: Filters = {}
): Promise<SanityAvailableLecture[]> {
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

  // Exclude School and Kindergarten categories
  filterQuery.push(
    `categoryId != "${SwimmingCategoryId.SCHOOL}" && categoryId != "${SwimmingCategoryId.KINDERGARTEN}"`
  );

  //TODO: need to comment out mergedFilter to generate FE sanity types
  const mergedFilter = filterQuery.join(' && ');

  const queryAvailableCourses = groq`*[_type == "kidsCourse" && _id > $lastId][${mergedFilter}]{"id":_id,"priceYear":price.priceYear,"priceSemester":price.priceSemester,isFull,categoryId,dayId,timeFrom,url,timeTo,"ageFrom":age.ageFrom,"ageTo":age.ageTo,
  ...(swimmingPool->{"name":name,"slug":slug.current,"alt":image.alt,"image":image{asset->{...,metadata}},"swimmingPoolUrl":url,"privateSwimmingPool":privateSwimmingPool,"isSchoolOrKindergartenAvailable":isSchoolOrKindergartenAvailable})
  }[] [0...$pageSize]`;

  const course = await client.fetch(queryAvailableCourses, {
    lastId: filters.lastId,
    pageSize: filters.pageSize,
  });

  return course;
}

export async function getLectures(): Promise<SanityLecture[]> {
  const queryLectures = groq`*[_type == "kidsCourse"]{"id":_id,"priceYear":price.priceYear,"priceSemester":price.priceSemester,isFull,categoryId,dayId,timeFrom,timeTo,"ageFrom":age.ageFrom,"ageTo":age.ageTo,"swimmingPoolId":swimmingPool->._id,"name":swimmingPool->.name,"alt":swimmingPool->.image.alt,"image":swimmingPool->.image{asset->{...,metadata}},"url":swimmingPool->.url,"privateSwimmingPool":swimmingPool->.privateSwimmingPool,"isSchoolOrKindergartenAvailable":swimmingPool->.isSchoolOrKindergartenAvailable}[]`;

  const course = await client.fetch(queryLectures);

  return course;
}

export async function getLecturesForSwimmingPoolAndCategory(
  categoryId: string,
  swimmingPoolId: string
): Promise<SanityLecture[]> {
  const queryLecturesByPoolAndCategory = groq`*[_type == "kidsCourse" && categoryId == $categoryId &&
   swimmingPool->slug.current == $swimmingPoolId
  ]{"id":_id,"priceYear":price.priceYear,"priceSemester":price.priceSemester,discount,isFull,categoryId,dayId,timeFrom,timeTo,"ageFrom":age.ageFrom,"ageTo":age.ageTo,"swimmingPoolId":swimmingPool->._id,"name":swimmingPool->.name,"alt":swimmingPool->.image.alt,"image":swimmingPool->.image{asset->{...,metadata}},"url":swimmingPool->.url,"privateSwimmingPool":swimmingPool->.privateSwimmingPool,"isSchoolOrKindergartenAvailable":swimmingPool->.isSchoolOrKindergartenAvailable,categoryId}[]`;

  const course = await client.fetch(queryLecturesByPoolAndCategory, {
    categoryId,
    swimmingPoolId,
  });

  return course;
}
