import { useRouter } from 'next/router';

import * as S from './Breadcrumbs.style';

type Option = {
  label: string;
  href: string;
};

interface BreadcrumbsProps {
  breadcrumbs: Option[];
}

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const router = useRouter();

  const isPathActive = (href: string) => {
    const pathWithoutQuery = router.asPath.split('?')[0];
    const [currentPath, currentHash] = pathWithoutQuery.split('#');
    const [hrefPath, hrefHash] = href.split('#');

    // Check if the base path matches
    if (currentPath === hrefPath) {
      // If both have hash fragments, check if they match
      if (hrefHash && currentHash) {
        return hrefHash === currentHash;
      }
      // If no hash fragment is present, consider it active
      return true;
    }

    return undefined; // Return undefined if not active
  };

  return (
    <S.Breadcrumbs>
      {breadcrumbs.map((breadcrumb) => (
        <S.Breadcrumb key={breadcrumb?.label}>
          <S.BreadcrumbLink
            href={breadcrumb?.href}
            data-current={isPathActive(breadcrumb?.href)}
          >
            {breadcrumb?.label}
          </S.BreadcrumbLink>
        </S.Breadcrumb>
      ))}
    </S.Breadcrumbs>
  );
}
