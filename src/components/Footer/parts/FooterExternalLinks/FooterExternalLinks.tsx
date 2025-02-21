import FacebookIcon from '~/public/icons/facebook.svg';
import InstagramIcon from '~/public/icons/instagram.svg';
import YoutubeIcon from '~/public/icons/youtube.svg';

import Image from 'next/image';
import Link from 'next/link';

import { A } from '~/ui/components/atoms';

import dayjs from 'dayjs';
import * as S from './FooterExternalLinks.style';

export const FooterExternalLinks = () => {
  const currentYear = dayjs().year();

  return (
    <S.FooterExternalLinks>
      <S.ImageFlexContainer gap="1rem" direction="row">
        <Link href="https://www.youtube.com/KometaSwimTv">
          <Image src={YoutubeIcon} width={30} height={30} alt="youtube" />
        </Link>
        <Link href="https://www.instagram.com/kometaplavani">
          <Image src={InstagramIcon} width={30} height={30} alt="instagram" />
        </Link>
        <Link href="https://www.facebook.com/kometaplavani">
          <Image src={FacebookIcon} width={30} height={30} alt="facebook" />
        </Link>
      </S.ImageFlexContainer>
      <S.Creator variant="body6">
        © {currentYear} Kometa Brno | Vytvořil{' '}
        <A href="https://www.pavelzapletal.cz/">Pavel Zapletal</A>
      </S.Creator>
    </S.FooterExternalLinks>
  );
};
