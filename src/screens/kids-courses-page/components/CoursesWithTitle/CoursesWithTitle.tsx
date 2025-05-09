import {
  SwimmingCategoryId,
  SwimmingCategoryTranslation,
  TransformedKidsCourse,
} from '~/types';
import { ServiceCard } from '~/ui/components/molecules';

import * as S from './CoursesWithTitle.style';

interface CoursesWithTitleProps {
  title: string;
  courses: TransformedKidsCourse[];
}

export function CoursesWithTitle({ courses, title }: CoursesWithTitleProps) {
  return (
    <S.CoursesWithTitle>
      <S.Title>{title}</S.Title>
      <S.CoursesWithTitleContainer>
        {courses?.map((course) => (
          <ServiceCard
            key={course.id}
            title={course.name}
            tags={getChipsForCourse(course)}
            imageAlt={course.alt}
            image={course.image}
            url={course.url}
          />
        ))}
      </S.CoursesWithTitleContainer>
    </S.CoursesWithTitle>
  );
}

function getChipsForCourse(course: TransformedKidsCourse): string[] {
  const chips: string[] = [];

  course?.categories?.forEach((category) => {
    if (category === SwimmingCategoryId.BASIC) {
      chips.push(SwimmingCategoryTranslation.BASIC);
    }

    if (category === SwimmingCategoryId.ADVANCED) {
      chips.push(SwimmingCategoryTranslation.ADVANCED);
    }

    if (category === SwimmingCategoryId.CONDITION) {
      chips.push(SwimmingCategoryTranslation.CONDITION);
    }
  });

  if (course.isSchoolOrKindergartenAvailable) {
    chips.push('Školy a školky');
  }

  const order = [
    SwimmingCategoryTranslation.BASIC,
    SwimmingCategoryTranslation.ADVANCED,
    SwimmingCategoryTranslation.CONDITION,
    'Školy a školky',
  ];

  return chips.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}
