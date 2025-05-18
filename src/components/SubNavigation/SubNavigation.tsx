import { Button, MaxWidth } from '~/ui/components/atoms';
import * as S from './SubNavigation.style';
import { Dropdown } from './components';

export interface SubNavigationProps {
  mainLink: string;
  mainLinkLabel?: string;
  items?: {
    label: string;
    href?: string;
    dropdownItems?: {
      label: string;
      href: string;
    }[];
  }[];
  signInLink?: string;
}

export function SubNavigation({
  items,
  mainLink,
  mainLinkLabel,
  signInLink,
}: SubNavigationProps) {
  return (
    <S.SubNavigation as="nav" aria-label="Podpůrná navigace">
      <MaxWidth>
        <S.SubNavigationContainer>
          <S.MainLink href={mainLink}>
            <S.ListItem>{mainLinkLabel}</S.ListItem>
          </S.MainLink>

          <S.UnorderedList>
            {items?.map((item) =>
              (item?.dropdownItems?.length ?? 0) > 0 ? (
                <Dropdown key={item.label} items={item.dropdownItems}>
                  {item.label}
                </Dropdown>
              ) : (
                <S.ListItem key={item.label}>
                  <S.Link href={item?.href ?? ''}>{item.label}</S.Link>
                </S.ListItem>
              )
            )}
            {(signInLink?.length ?? 0) > 0 && (
              <S.ButtonContainer>
                <S.Link href={signInLink as string}>
                  <Button variant="outlined">Přihlásit se</Button>
                </S.Link>
              </S.ButtonContainer>
            )}
          </S.UnorderedList>
        </S.SubNavigationContainer>
      </MaxWidth>
    </S.SubNavigation>
  );
}
