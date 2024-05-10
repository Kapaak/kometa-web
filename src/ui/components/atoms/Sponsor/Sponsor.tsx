import { StaticImageData } from 'next/image'

import * as S from './Sponsor.style'

interface SponsorProps {
  image?: StaticImageData
  href: string
  name: string
}

export const Sponsor = ({ href, image, name }: SponsorProps) => {
  return (
    <S.Sponsor href={href}>
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
  )
}
