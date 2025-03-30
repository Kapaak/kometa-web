import { useRouter } from 'next/router';

// import { useFilterLectures } from '~/hooks';
// import { MaxWidth, Space } from '~/styles';
// import { getPageRouteTranslation } from '~/utils';

import { MaxWidth } from '~/ui/components/atoms';
import { ServiceCardDescription } from '~/ui/components/molecules';
import { IndividualCourse } from '../../components';
import * as S from './LuzankyServiceSection.style';

export const LuzankyServiceSection = () => {
  const { route } = useRouter();

  // const { filteredLectures } = useFilterLectures(
  //   getPageRouteTranslation(route)
  // );

  // if (!filteredLectures) return null;

  return (
    <S.ServiceSection id="service">
      <MaxWidth>
        <S.Services gap="4rem">
          <ServiceCardDescription
            imageAlt=""
            image="/images/service/adult-swimming.jpg"
            description="Vhodné pro dospělé plavce, kteří chtějí zlepšit svou techniku a plavecké dovednosti. Lekce probíhají v menších skupinkách pod vedením zkušeného instruktora."
            title="TEST"
            tags={['yolo', 'swaž']}
          />
          <ServiceCardDescription
            imageAlt=""
            image="/images/service/adult-swimming.jpg"
            description="Vhodné pro dospělé plavce, kteří chtějí zlepšit svou techniku a plavecké dovednosti. Lekce probíhají v menších skupinkách pod vedením zkušeného instruktora."
            title="TEST"
            tags={['yolo', 'swaž']}
          />
          <ServiceCardDescription
            imageAlt=""
            image="/images/service/adult-swimming.jpg"
            description="Vhodné pro dospělé plavce, kteří chtějí zlepšit svou techniku a plavecké dovednosti. Lekce probíhají v menších skupinkách pod vedením zkušeného instruktora."
            title="TEST"
            tags={['yolo', 'swaž']}
          />
          <ServiceCardDescription
            imageAlt=""
            image="/images/service/adult-swimming.jpg"
            description="Vhodné pro dospělé plavce, kteří chtějí zlepšit svou techniku a plavecké dovednosti. Lekce probíhají v menších skupinkách pod vedením zkušeného instruktora."
            title="TEST"
            tags={['yolo', 'swaž']}
          />

          {/* {filteredLectures.map((filteredLecture, index) => (
            <Service
              headline={filteredLecture?.headline}
              text={filteredLecture.text}
              image={filteredLecture.image}
              name={filteredLecture.name}
              key={`${index}_${filteredLecture.name}`}
              alt={filteredLecture.alt}
              tag={filteredLecture.tag}
              price={filteredLecture.price ?? ''}
            />
          ))} */}
        </S.Services>
        {/* <Space /> */}
        <IndividualCourse />
      </MaxWidth>
    </S.ServiceSection>
  );
};
