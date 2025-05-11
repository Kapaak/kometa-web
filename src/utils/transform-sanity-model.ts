import {
  GetAvailableCourse,
  SanityAvailableLecture,
  SanityBlogPost,
  SanityCamps,
  SanityLecture,
  SanitySwimmingPoolDetail,
  TransformedBlogPost,
  TransformedSwimmingPoolDetail,
} from '~/domains';
import {
  Category,
  SwimmingCategoryId,
  SwimmingCategoryTranslation,
  TransformedKidsCourse,
} from '~/types';

import { getDayFullName } from './day';
import { urlForImage } from './sanity';

//Needs to be separated, because I am using here "urlForImage" which is available only on server
//else I would need to pass env as public, which I dont want to

export function transformKidsCourses(
  courses: SanityLecture[]
): TransformedKidsCourse[] {
  return courses.reduce(
    (acc: TransformedKidsCourse[], course: SanityLecture) => {
      let pool = acc.find(
        (pool) => pool.swimmingPoolId === course.swimmingPoolId
      );

      if (!pool) {
        pool = {
          id: course.id ?? '',
          name: course.name ?? '',
          url: course.url ?? '',
          alt: course.alt ?? '',
          image: course?.image
            ? urlForImage(course.image)?.url()
            : '/images/place/generic-swimming-pool.jpeg',
          isSchoolOrKindergartenAvailable:
            course.isSchoolOrKindergartenAvailable ?? false,
          swimmingPoolId: course.swimmingPoolId ?? '',
          privateSwimmingPool: course.privateSwimmingPool ?? false,
          categories: [],
        };
        acc.push(pool);
      }

      if (!pool.categories.includes(course.categoryId ?? '')) {
        pool.categories.push(course.categoryId ?? '');
      }

      return acc;
    },
    []
  );
}

export function transformCamp(course: SanityCamps): SanityCamps {
  return {
    id: course.id || '',
    name: course.name || '',
    url: course.url || '',
    alt: course.alt || '',
    image: course?.image
      ? urlForImage(course.image)?.url()
      : '/images/place/generic-swimming-pool.jpeg',
    tags: course.tags || [],
  };
}

export function transformAvailableCourse(
  course: SanityAvailableLecture
): GetAvailableCourse {
  const variantTranslation = {
    basic: SwimmingCategoryTranslation.BASIC,
    advanced: SwimmingCategoryTranslation.ADVANCED,
    condition: SwimmingCategoryTranslation.CONDITION,
    adult: SwimmingCategoryTranslation.ADULT,
    kindergarten: SwimmingCategoryTranslation.KINDERGARTEN,
    school: SwimmingCategoryTranslation.SCHOOL,
  };

  return {
    id: course?.id,
    dayId: Number(course?.dayId),
    day: course?.dayId ? getDayFullName(course.dayId) : '-',
    isFull: course?.isFull ?? false,
    priceYear: course?.priceYear ?? 0,
    priceSemester: course?.priceSemester ?? 0,
    timeFrom: course?.timeFrom ?? '-',
    timeTo: course?.timeTo ?? '-',
    ageFrom: course?.ageFrom ?? 0,
    ageTo: course?.ageTo ?? 0,
    skillLevelId: course?.categoryId as SwimmingCategoryId,
    skillLevelName: course?.categoryId
      ? variantTranslation[course.categoryId]
      : '-',
    name: course?.name ?? '',
    url: course?.url ?? '',
    alt: course?.alt ?? '',
    isSchoolOrKindergartenAvailable:
      course.isSchoolOrKindergartenAvailable ?? false,
    privateSwimmingPool: course.privateSwimmingPool ?? false,
  };
}

export function transformBlogPost(
  blogPost: SanityBlogPost
): TransformedBlogPost {
  return {
    id: blogPost?.id,
    title: blogPost?.title ?? '',
    shortDescription: blogPost?.shortDescription ?? '',
    description: blogPost?.description,
    createdAt: blogPost?.createdAt ?? '',
    author: blogPost?.author ?? '',
    readTime: blogPost?.readTime ?? NaN,
    image: blogPost?.image
      ? urlForImage(blogPost.image)?.url()
      : '/images/place/generic-swimming-pool.jpeg',
    aspectRatio:
      blogPost?.image?.asset?.metadata?.dimensions?.aspectRatio ?? NaN,
    alt: blogPost?.alt ?? '',
    tags: (blogPost?.tags as Category[]) ?? [],
    url: blogPost?.slug ?? '',
    slug: blogPost?.slug ?? '',
    blurDataURL: blogPost?.image?.asset?.metadata?.lqip,
  };
}

export function transformSwimmingPoolDetail(
  swimmingPoolDetail: SanitySwimmingPoolDetail
): TransformedSwimmingPoolDetail {
  return {
    id: swimmingPoolDetail?.id ?? '',
    faq: swimmingPoolDetail?.faq ?? [],
    fileUploads: swimmingPoolDetail?.fileUploads ?? [],
    imageGallery:
      swimmingPoolDetail?.imageGallery?.map((image) => ({
        url: urlForImage(image)?.url(),
        alt: image?.asset?.altText,
        dimensions: {
          width: image?.asset?.metadata?.dimensions?.width ?? 0,
          height: image?.asset?.metadata?.dimensions?.height ?? 0,
          aspectRatio: image?.asset?.metadata?.dimensions?.aspectRatio ?? 0,
        },
        blurDataURL: image?.asset?.metadata?.blurHash,
      })) ?? [],
    sampleTraining: swimmingPoolDetail?.sampleTraining ?? '',
    skillRequirement: swimmingPoolDetail?.skillRequirement ?? [],
    announcements: swimmingPoolDetail?.announcements ?? [],
  };
}
