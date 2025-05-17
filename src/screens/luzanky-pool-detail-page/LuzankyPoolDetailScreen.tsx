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

  return (
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
      <LuzankyDetailHeroSection />
      <LuzankyDetailAboutSection />
      <LuzankyDetailSkillLevelSection />
      <LuzankyDetailFirstLectureSection />
    </BreadcrumbsLayout>
  );
}
