import { SanityCamps } from '~/domains';
import { MaxWidth } from '~/ui/components/atoms';
import { ServiceCard } from '~/ui/components/molecules';

import * as S from './CampsSection.style';

interface CampsSectionProps {
  camps: Required<SanityCamps>[];
}

export function CampsSection({ camps }: CampsSectionProps) {
  return (
    <S.CampsSection>
      <MaxWidth>
        <S.CampsContainerWrapper>
          <S.Title>Tábory</S.Title>
          <S.CampsContainer>
            {camps?.map((camp) => (
              <ServiceCard
                key={camp.id}
                title={camp.name}
                tags={camp.tags}
                imageAlt={camp.alt}
                image={camp.image}
                url={camp.url}
              />
            ))}
          </S.CampsContainer>
        </S.CampsContainerWrapper>
      </MaxWidth>
    </S.CampsSection>
  );
}
