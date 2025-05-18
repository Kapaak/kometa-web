import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { VerticalStack } from '~/ui/components/atoms';
import {
  LuzankyAboutSection,
  LuzankyBasicInfoSection,
  LuzankyContactSection,
  LuzankyFAQSection,
  LuzankyHeroSection,
  LuzankyServiceSection,
} from './parts';

export function LuzankyPoolScreen() {
  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Bazény', href: '/kurzy-pro-deti' },
    { label: 'Lužánky', href: '/bazeny/luzanky' },
  ];

  const subNavigation = {
    mainLink: '/bazeny/luzanky',
    mainLinkLabel: 'Plavecké kurzy Lužánky',
    items: [
      { label: 'O nás', href: '/o-nas' },
      {
        label: 'Kurzy',
        dropdownItems: [
          {
            label: 'Základní plavání',
            href: '/bazeny/luzanky/zakladni-plavani',
          },
          {
            label: 'Zdokonalovací plavání',
            href: '/bazeny/luzanky/zdokonalovaci-plavani',
          },
          {
            label: 'Kondiční plavání',
            href: '/bazeny/luzanky/kondicni-plavani',
          },
          { label: 'Pro organizace MŠMT', href: '/bazeny/luzanky/skolky' },
          { label: 'Pro dospělé', href: '/bazeny/luzanky/plavani-pro-dospele' },
        ],
      },
      { label: 'Základní informace', href: '/zakladni-informace' },
      { label: 'Časté dotazy', href: '/caste-dotazy' },
      { label: 'Adresa', href: '/adresa' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
  };

  return (
    <BreadcrumbsLayout subNavigation={subNavigation} breadcrumbs={breadcrumbs}>
      <VerticalStack gap="2rem">
        <LuzankyHeroSection />
        <LuzankyAboutSection />
        <LuzankyServiceSection />
        <LuzankyBasicInfoSection />
        <LuzankyFAQSection />
        <LuzankyContactSection />
      </VerticalStack>
    </BreadcrumbsLayout>
  );
}
