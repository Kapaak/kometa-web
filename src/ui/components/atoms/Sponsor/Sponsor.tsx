import { StaticImageData } from 'next/image';

import * as S from './Sponsor.style';

interface SponsorProps {
  image?: StaticImageData;
  href: string;
  name: string;
  disableGrayscale?: boolean;
}

export const Sponsor = ({
  href,
  image,
  name,
  disableGrayscale = false,
}: SponsorProps) => {
  return (
    <S.Sponsor hasGrayscale={!disableGrayscale} href={href}>
      {image && (
        <S.SponsorImage
          src={image}
          alt={name}
          height={80}
          width={100}
          priority
        />
      )}
    </S.Sponsor>
  );
};
