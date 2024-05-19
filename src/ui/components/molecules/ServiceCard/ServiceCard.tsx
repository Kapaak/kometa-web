import { Chip } from '../../atoms';

import * as S from './ServiceCard.style';

interface ServiceCardProps {
  title: string;
  image: string;
  imageAlt: string;
  chips?: string[];
  url?: string;
}

export function ServiceCard({
  chips,
  imageAlt,
  image,
  title,
  url,
}: ServiceCardProps) {
  const card = (
    <S.ServiceCard>
      <S.DarkenImage hoverable={Boolean(url)}>
        <S.ServiceCardBackgroundImage src={image} alt={imageAlt} fill />
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
