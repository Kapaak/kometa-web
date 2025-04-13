import { groq } from 'next-sanity';

import {
  SanityAvailableCourse,
  SanityBlogPost,
  SanityCamps,
  SanityKidsCourse,
  SanitySwimmingPool,
  SanityUploadedFile,
} from '~/domains';
import { SwimmingVariant } from '~/types';

import { client } from './config';

interface Pagination {
  lastId?: string;
  pageSize?: number;
}

interface Filters extends Pagination {
  age?: number;
  skillLevel?: SwimmingVariant;
  day?: string;
  time?: string;
  place?: string;
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

interface BlogPostFilters extends Pagination {
  categories?: string[];
}

export async function getBlogPosts(
  filters: BlogPostFilters
): Promise<SanityBlogPost[]> {
  let filterQuery: string[] = [];

  if (filters?.categories) {
    filters?.categories?.forEach((category) => {
      filterQuery.push(`"${category}" in tags`);
    });
  }

  //TODO: need to comment out mergedFilter to generate FE sanity types
  const mergedFilter = filterQuery.join(' || ');

  const queryBlogPosts = groq`*[_type == "blog"  && _id > $lastId][${mergedFilter}]{"id":_id,title,shortDescription,description,createdAt,author,readTime,"alt":image.alt,image{asset->{...,metadata}},tags,"slug":slug.current}[] [0...$pageSize] | order(createdAt desc)`;

  const blogPosts = await client.fetch(queryBlogPosts, {
    lastId: filters.lastId,
    pageSize: filters.pageSize,
  });

  return blogPosts;
}

export async function getBlogById(blogId: string): Promise<SanityBlogPost> {
  const query = groq`*[_type == "blog" && slug.current == $blogId][0]{"id":_id,title,shortDescription, description[]{
    ...,
    _type == "imageAlt" => {
      ...,
      asset->
    },
  },createdAt,author,readTime,image{asset->{...,metadata},alt},tags,slug}`;

  const blog: SanityBlogPost = await client.fetch(query, { blogId });

  return blog;
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

export async function getDocumentsBySwimmingPoolId(
  swimmingPoolId: string
): Promise<SanityUploadedFile[]> {
  const queryDocuments = groq`*[_type == "fileUpload"  &&  swimmingPool->slug.current == $swimmingPoolId]{"id":_id,title,file{
    asset->{...,metadata}
  },order,
    swimmingPool -> {"slug":slug.current}
  }[] | order(order)`;

  const course = await client.fetch(queryDocuments, { swimmingPoolId });

  return course;
}
