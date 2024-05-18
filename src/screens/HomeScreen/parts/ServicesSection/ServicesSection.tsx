import { MaxWidth } from '~/ui/components/atoms';
import { ServiceCard } from '~/ui/components/molecules';

import * as S from './ServicesSection.style';

import { servicesData } from './ServicesSection.data';

interface ServicesSectionProps {}

export function ServicesSection({}: ServicesSectionProps) {
  return (
    <S.ServicesSection>
      <MaxWidth>
        <S.ServicesSectionContainer>
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              imageAlt={service.imageAlt}
              imageUrl={service.imageUrl}
              chips={service.chips}
              url={service.url}
            />
          ))}
        </S.ServicesSectionContainer>
      </MaxWidth>
    </S.ServicesSection>
  );
}
