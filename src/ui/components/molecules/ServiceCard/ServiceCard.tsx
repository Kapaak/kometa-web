import { Chip } from '../../atoms';

import * as S from './ServiceCard.style';

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  chips?: string[];
  url?: string;
}

export function ServiceCard({
  chips,
  imageAlt,
  imageUrl,
  title,
  url,
}: ServiceCardProps) {
  const card = (
    <S.ServiceCard>
      <S.DarkenImage hoverable={Boolean(url)}>
        <S.ServiceCardBackgroundImage
          src={imageUrl}
          alt={imageAlt}
          fill
          objectFit="cover"
        />
      </S.DarkenImage>
      {chips && (
        <S.ServiceChipContainer>
          {chips.map((chip) => (
            <Chip key={chip}>{chip}</Chip>
          ))}
        </S.ServiceChipContainer>
      )}
      <S.ServiceCardTitle>{title}</S.ServiceCardTitle>
    </S.ServiceCard>
  );

  return url ? <S.ServiceCardLink href={url}>{card}</S.ServiceCardLink> : card;
}
