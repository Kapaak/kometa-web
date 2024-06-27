import { MaxWidth } from '~/ui/components/atoms';
import { ServiceCard } from '~/ui/components/molecules';

import * as S from './ServicesSection.style';

import { servicesData } from './ServicesSection.data';

export function ServicesSection() {
  return (
    <S.ServicesSection id="kurzy">
      <MaxWidth>
        <S.ServiceSectionHeadline>Nabídka služeb</S.ServiceSectionHeadline>
        <S.ServicesSectionContainer>
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              imageAlt={service.imageAlt}
              image={service.imageUrl}
              tags={service.tags}
              url={service.url}
            />
          ))}
        </S.ServicesSectionContainer>
      </MaxWidth>
    </S.ServicesSection>
  );
}
