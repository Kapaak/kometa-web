import { useRouter } from 'next/router';
import { BreadcrumbsLayout } from '~/components/BreadcrumbsLayout';
import { getCategoryNameBySlug } from '~/utils/category';
import {
  LuzankyDetailAboutSection,
  LuzankyDetailFirstLectureSection,
  LuzankyDetailHeroSection,
  LuzankyDetailSkillLevelSection,
} from './parts';

export function LuzankyPoolDetailScreen() {
  const router = useRouter();

  const breadcrumbs = [
    { label: 'Domů', href: '/' },
    { label: 'Bazény', href: '/kurzy-pro-deti' },
    { label: 'Lužánky', href: '/bazeny/luzanky' },
    {
      label: getCategoryNameBySlug(router.query.categoryId as string),
      href: router.asPath,
    },
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
    signInLink: `/bazeny/luzanky/${router.query.categoryId}/prihlasky`,
  };

  return (
    <BreadcrumbsLayout subNavigation={subNavigation} breadcrumbs={breadcrumbs}>
      <LuzankyDetailHeroSection />
      <LuzankyDetailAboutSection />
      <LuzankyDetailSkillLevelSection />
      <LuzankyDetailFirstLectureSection />
    </BreadcrumbsLayout>
  );
}
