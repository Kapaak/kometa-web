import { CalendarBlank, Timer, User } from '@phosphor-icons/react';

import { IconText } from '~/ui/components/molecules';
import { convertDateToString } from '~/utils/date';

import * as S from './BlogInfo.style';

interface BlogInfoProps {
  author?: string;
  readTime?: number;
  date?: string;
}

export function BlogInfo({ author, readTime, date }: BlogInfoProps) {
  return (
    <S.BlogInfo>
      <IconText icon={User} text={author} />
      <IconText
        icon={CalendarBlank}
        text={convertDateToString(new Date(date ?? ''))}
      />
      <IconText icon={Timer} text={`${readTime} min`} />
    </S.BlogInfo>
  );
}
