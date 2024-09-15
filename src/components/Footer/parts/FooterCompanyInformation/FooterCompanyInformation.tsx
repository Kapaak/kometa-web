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
        <S.Description>IČO: 44992432</S.Description>
      </VerticalStack>
      <VerticalStack>
        <S.Description>Sportovní Klub policie KOMETA BRNO z.s.</S.Description>
        <S.Description>Bauerova 321/5</S.Description>
        <S.Description>603 00 Brno</S.Description>
        <S.Description>IČO: 41604164</S.Description>
      </VerticalStack>
    </S.FooterCompanyInformation>
  );
};
