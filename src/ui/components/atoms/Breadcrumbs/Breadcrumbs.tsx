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
    if (router.pathname === href) {
      return true;
    }

    //cant be false, it would still be selected
    return undefined;
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
