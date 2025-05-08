import { StaticImageData } from 'next/image';
import { Button, Tag, Text } from '../../atoms';
import * as S from './ServiceCardDescription.style';

interface ServiceCardProps {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  tags?: string[];
  url?: string;
  description?: string;
}

export function ServiceCardDescription({
  tags,
  imageAlt,
  image,
  title,
  description,
  url,
}: ServiceCardProps) {
  return (
    <S.ServiceCardDescription>
      <S.ServiceCardImageContainer>
        <S.ServiceCardBackgroundImage
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1368px) 623px, 33vw"
        />
        {tags && (
          <S.ServiceChipContainer>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </S.ServiceChipContainer>
        )}
      </S.ServiceCardImageContainer>

      <S.ServiceCardTextContainer>
        <S.ServiceCardTitle>{title}</S.ServiceCardTitle>
        <Text>{description}</Text>
      </S.ServiceCardTextContainer>

      <S.ServiceCardLink href={url ?? ''} passHref>
        <Button variant="outlined">Více informací</Button>
      </S.ServiceCardLink>
    </S.ServiceCardDescription>
  );
}
