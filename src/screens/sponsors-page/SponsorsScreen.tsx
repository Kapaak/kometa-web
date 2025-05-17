import {
  Flex,
  Headline,
  MaxWidth,
  Section,
  Sponsor,
} from '~/ui/components/atoms';
import { PageLayout } from '~/ui/components/templates';

import { donators } from './constants';

export function SponsorsScreen() {
  return (
    <PageLayout>
      <Section>
        <MaxWidth>
          <Headline>Sponzoři</Headline>

          <Flex gap="8rem" wrap="wrap" padding="8rem 0">
            {donators.map((donator) => (
              <Sponsor
                key={donator.name}
                name={donator.name}
                image={donator.image}
                href={donator.href}
                disableGrayscale
              />
            ))}
          </Flex>
        </MaxWidth>
      </Section>
    </PageLayout>
  );
}
