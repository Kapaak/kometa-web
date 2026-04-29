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
  const places = filters.place
    ?.split(',')
    .map((place) => place.trim())
    .filter(Boolean);

  const days = filters.day
    ?.split(',')
    .map((day) => Number(day.trim()))
    .filter((day) => !Number.isNaN(day));

  const times = filters.time
    ?.split(',')
    .map((hour) => hour.trim())
    .filter(Boolean)
    .flatMap((hour) =>
      ['00', '15', '30', '45'].map((minute) => `${hour}:${minute}`)
    );

  const queryAvailableCourses = groq`*[
    _type == "kidsCourse" &&
    _id > coalesce($lastId, "") &&
    ($age == null || (age.ageFrom <= $age && age.ageTo >= $age)) &&
    (count($places) == 0 || $places match swimmingPool->slug.current) &&
    (count($days) == 0 || dayId in $days) &&
    (count($times) == 0 || $times match timeFrom) &&
    ($skillLevel == null || [$skillLevel] match categoryId) &&
    categoryId != $schoolCategory &&
    categoryId != $kindergartenCategory
  ]{"id":_id,
  "priceYear":*[_type == "courseCategoryPricing" && categoryId == ^.categoryId && swimmingPool._ref == ^.swimmingPool._ref][0].coursePrice.priceYear,
  "priceFirstHalf":*[_type == "courseCategoryPricing" && categoryId == ^.categoryId && swimmingPool._ref == ^.swimmingPool._ref][0].coursePrice.priceFirstHalf,
  "priceSecondHalf":*[_type == "courseCategoryPricing" && categoryId == ^.categoryId && swimmingPool._ref == ^.swimmingPool._ref][0].coursePrice.priceSecondHalf,
  isFull,categoryId,dayId,timeFrom,url,timeTo,"ageFrom":age.ageFrom,"ageTo":age.ageTo,
  ...(swimmingPool->{"name":name,"slug":slug.current,"alt":image.alt,"image":image{asset->{...,metadata}},"swimmingPoolUrl":url,"privateSwimmingPool":privateSwimmingPool,"isSchoolOrKindergartenAvailable":isSchoolOrKindergartenAvailable})
  }[] [0...$pageSize]`;

  const course = await client.fetch(queryAvailableCourses, {
    age: typeof filters.age === 'number' ? filters.age : null,
    days: days ?? [],
    kindergartenCategory: SwimmingCategoryId.KINDERGARTEN,
    lastId: filters.lastId ?? '',
    pageSize: filters.pageSize ?? 20,
    places: places ?? [],
    schoolCategory: SwimmingCategoryId.SCHOOL,
    skillLevel: filters.skillLevel ?? null,
    times: times ?? [],
  });

  return course;
}

export async function getLectures(): Promise<SanityLecture[]> {
  const queryLectures = groq`*[_type == "kidsCourse"]{"id":_id,
  "priceYear":*[_type == "courseCategoryPricing" && categoryId == ^.categoryId && swimmingPool._ref == ^.swimmingPool._ref][0].coursePrice.priceYear,
  "priceFirstHalf":*[_type == "courseCategoryPricing" && categoryId == ^.categoryId && swimmingPool._ref == ^.swimmingPool._ref][0].coursePrice.priceFirstHalf,
  "priceSecondHalf":*[_type == "courseCategoryPricing" && categoryId == ^.categoryId && swimmingPool._ref == ^.swimmingPool._ref][0].coursePrice.priceSecondHalf,
  isFull,categoryId,dayId,timeFrom,timeTo,"ageFrom":age.ageFrom,"ageTo":age.ageTo,"swimmingPoolId":swimmingPool->._id,"name":swimmingPool->.name,"alt":swimmingPool->.image.alt,"image":swimmingPool->.image{asset->{...,metadata}},"url":swimmingPool->.url,"privateSwimmingPool":swimmingPool->.privateSwimmingPool,"isSchoolOrKindergartenAvailable":swimmingPool->.isSchoolOrKindergartenAvailable}[]`;

  const course = await client.fetch(queryLectures);

  return course;
}

export async function getLecturesForSwimmingPoolAndCategory(
  categoryId: string,
  swimmingPoolId: string
): Promise<SanityLecture[]> {
  const queryLecturesByPoolAndCategory = groq`*[_type == "kidsCourse" && categoryId == $categoryId &&
   swimmingPool->slug.current == $swimmingPoolId
  ]{"id":_id,
  "priceYear":*[_type == "courseCategoryPricing" && categoryId == ^.categoryId && swimmingPool._ref == ^.swimmingPool._ref][0].coursePrice.priceYear,
  "priceFirstHalf":*[_type == "courseCategoryPricing" && categoryId == ^.categoryId && swimmingPool._ref == ^.swimmingPool._ref][0].coursePrice.priceFirstHalf,
  "priceSecondHalf":*[_type == "courseCategoryPricing" && categoryId == ^.categoryId && swimmingPool._ref == ^.swimmingPool._ref][0].coursePrice.priceSecondHalf,
  discount,isFull,categoryId,dayId,timeFrom,timeTo,"ageFrom":age.ageFrom,"ageTo":age.ageTo,"swimmingPoolId":swimmingPool->._id,"name":swimmingPool->.name,"alt":swimmingPool->.image.alt,"image":swimmingPool->.image{asset->{...,metadata}},"url":swimmingPool->.url,"privateSwimmingPool":swimmingPool->.privateSwimmingPool,"isSchoolOrKindergartenAvailable":swimmingPool->.isSchoolOrKindergartenAvailable,categoryId}[]`;

  const course = await client.fetch(queryLecturesByPoolAndCategory, {
    categoryId,
    swimmingPoolId,
  });

  return course;
}

export async function getPreliminaryLecturesForSwimmingPoolAndCategory(
  categoryId: string,
  swimmingPoolId: string
) {
  const queryPreliminaryLecturesByPoolAndCategory = groq`*[_type == "preliminaryCourse" && categoryId == $categoryId &&
   swimmingPool->slug.current == $swimmingPoolId && activeDate.activeDateFrom <= now() && activeDate.activeDateTo >= now() && !isFull
  ]{"id":_id,"dateFrom":activeDate.activeDateFrom,"dateTo":activeDate.activeDateTo,
  "priceYear":*[_type == "courseCategoryPricing" && categoryId == ^.categoryId && swimmingPool._ref == ^.swimmingPool._ref][0].preliminaryCoursePrice.priceYear,
  "priceFirstHalf":*[_type == "courseCategoryPricing" && categoryId == ^.categoryId && swimmingPool._ref == ^.swimmingPool._ref][0].preliminaryCoursePrice.priceFirstHalf,
  "priceSecondHalf":*[_type == "courseCategoryPricing" && categoryId == ^.categoryId && swimmingPool._ref == ^.swimmingPool._ref][0].preliminaryCoursePrice.priceSecondHalf,
  discount,isFull,categoryId,dayId,timeFrom,timeTo,"ageFrom":age.ageFrom,"ageTo":age.ageTo,"swimmingPoolId":swimmingPool->._id,"name":swimmingPool->.name,"alt":swimmingPool->.image.alt,"image":swimmingPool->.image{asset->{...,metadata}},"url":swimmingPool->.url,"privateSwimmingPool":swimmingPool->.privateSwimmingPool,"isSchoolOrKindergartenAvailable":swimmingPool->.isSchoolOrKindergartenAvailable,categoryId}[]`;

  const course = await client.fetch(queryPreliminaryLecturesByPoolAndCategory, {
    categoryId,
    swimmingPoolId,
  });

  return course;
}
