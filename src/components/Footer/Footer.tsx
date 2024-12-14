import {
  FooterCompanyInformation,
  FooterExternalLinks,
  FooterMainContent,
} from './parts';

import * as S from './Footer.style';

interface FooterProps {}

export function Footer({}: FooterProps) {
  return (
    <S.Footer id="kontakt">
      <S.MaxWidthContainer variant="wide">
        <S.FlexContainer>
          <FooterCompanyInformation />
          <FooterMainContent />
          <FooterExternalLinks />
        </S.FlexContainer>
      </S.MaxWidthContainer>
    </S.Footer>
  );
}
