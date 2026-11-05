import { useSwimmingPoolConfig } from '~/contexts/SwimmingPoolConfigContext';
import { MaxWidth } from '~/ui/components/atoms';
import { ServiceCardDescription } from '~/ui/components/molecules';
import { getSwimmingPoolPath } from '~/utils/swimming-pool';

import { IndividualCourse } from '../../components';

import * as S from './PoolServiceSection.style';

export const PoolServiceSection = () => {
  const { id, services } = useSwimmingPoolConfig();
  const poolPath = getSwimmingPoolPath(id);

  return (
    <S.ServiceSection id="service">
      <MaxWidth>
        <S.Services gap="4rem">
          {services.map((service) => (
            <ServiceCardDescription
              key={service.id}
              applicationUrl={`${poolPath}/${service.id}/prihlasky`}
              imageAlt={service.alt}
              image={service.src}
              title={service.title}
              description={service.description}
              tags={service.tags}
              url={service.href ?? `${poolPath}/${service.id}`}
              applicationDisabled={service?.applicationDisabled}
            />
          ))}
        </S.Services>
        <IndividualCourse />
      </MaxWidth>
    </S.ServiceSection>
  );
};
