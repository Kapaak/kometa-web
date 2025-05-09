import { FileArrowDown } from '@phosphor-icons/react';

import { Flex } from '~/ui/components/atoms';
import * as S from './Document.style';

interface DocumentProps {
  label: string;
  filePath: string;
}

export const Document = ({ label, filePath }: DocumentProps) => {
  return (
    <S.Document>
      <Flex direction="row" align="center" gap="1rem" justify="space-between">
        <S.DocumentLabel>{label}</S.DocumentLabel>
        <a href={filePath} target="_blank" rel="noopener noreferrer" download>
          <FileArrowDown size={30} weight="light" />
        </a>
      </Flex>
    </S.Document>
  );
};
