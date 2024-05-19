import { SwimmingVariantTranslation, TransformedKidsCourse } from '~/domains';
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
            chips={getChipsForCourse(course)}
            imageAlt={`Bazén ${course.name}`}
            image="/images/place/generic-swimming-pool.jpeg"
            url={course.url}
          />
        ))}
      </S.CoursesWithTitleContainer>
    </S.CoursesWithTitle>
  );
}

function getChipsForCourse(course: TransformedKidsCourse): string[] {
  const chips: string[] = [];

  if (course.basic) {
    chips.push(SwimmingVariantTranslation.BASIC);
  }

  if (course.advanced) {
    chips.push(SwimmingVariantTranslation.ADVANCED);
  }

  if (course.condition) {
    chips.push(SwimmingVariantTranslation.CONDITION);
  }

  if (course.isSchoolOrKindergartenAvailable) {
    chips.push('Školy a školky');
  }

  return chips;
}
