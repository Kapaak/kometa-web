import { MaxWidth } from '~/ui/components/atoms';
import { ServiceCardDescription } from '~/ui/components/molecules';
import { IndividualCourse } from '../../components';
import { services } from '../../constants';
import * as S from './LuzankyServiceSection.style';

export const LuzankyServiceSection = () => {
  return (
    <S.ServiceSection id="service">
      <MaxWidth>
        <S.Services gap="4rem">
          {services.map((service) => (
            <ServiceCardDescription
              key={service.id}
              categorySlugId={service.id}
              imageAlt={service.alt}
              image={service.src}
              title={service.title}
              description={service.description}
              tags={service.tags}
              url={service.href}
              applicationDisabled={service?.applicationDisabled}
            />
          ))}
        </S.Services>
        <IndividualCourse />
      </MaxWidth>
    </S.ServiceSection>
  );
};
