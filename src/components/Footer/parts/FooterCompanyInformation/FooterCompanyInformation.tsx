import KometaLogo from '~/public/icons/kometa.svg';

import Image from 'next/image';

import { VerticalStack } from '~/ui/components/atoms';

import * as S from './FooterCompanyInformation.style';

export const FooterCompanyInformation = () => {
  return (
    <S.FooterCompanyInformation>
      <Image src={KometaLogo} alt="logo Kometa Brno" />
      <VerticalStack>
        <S.Description>
          Klub plaveckých sportů policie Kometa Brno z.s.
        </S.Description>
        <S.Description>Sportovní 486/4</S.Description>
        <S.Description>602 00 Brno - Královo Pole</S.Description>
      </VerticalStack>
    </S.FooterCompanyInformation>
  );
};
