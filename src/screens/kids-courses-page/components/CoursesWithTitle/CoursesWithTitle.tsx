import {
  SwimmingVariant,
  SwimmingVariantTranslation,
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
    if (category === SwimmingVariant.BASIC) {
      chips.push(SwimmingVariantTranslation.BASIC);
    }

    if (category === SwimmingVariant.ADVANCED) {
      chips.push(SwimmingVariantTranslation.ADVANCED);
    }

    if (category === SwimmingVariant.CONDITION) {
      chips.push(SwimmingVariantTranslation.CONDITION);
    }
  });

  if (course.isSchoolOrKindergartenAvailable) {
    chips.push('Školy a školky');
  }

  const order = [
    SwimmingVariantTranslation.BASIC,
    SwimmingVariantTranslation.ADVANCED,
    SwimmingVariantTranslation.CONDITION,
    'Školy a školky',
  ];

  return chips.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}
