import { Tag } from '../../atoms';

import * as S from './ServiceCard.style';

interface ServiceCardProps {
  title: string;
  image: string;
  imageAlt: string;
  tags?: string[];
  url?: string;
}

export function ServiceCard({
  tags,
  imageAlt,
  image,
  title,
  url,
}: ServiceCardProps) {
  const card = (
    <S.ServiceCard>
      <S.DarkenImage hoverable={Boolean(url)}>
        <S.ServiceCardBackgroundImage
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1368px) 623px, 33vw"
        />
      </S.DarkenImage>
      {tags && (
        <S.ServiceChipContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </S.ServiceChipContainer>
      )}
      <S.ServiceCardTitle>{title}</S.ServiceCardTitle>
    </S.ServiceCard>
  );

  return url ? <S.ServiceCardLink href={url}>{card}</S.ServiceCardLink> : card;
}
