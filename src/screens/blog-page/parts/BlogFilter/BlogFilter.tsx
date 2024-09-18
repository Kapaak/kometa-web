import { Category, categoryTranslation } from '~/types';
import { Flex } from '~/ui/components/atoms';

import * as S from './BlogFilter.style';

interface BlogFilterProps {
  getIsCategoryActive: (filterCategory: Category) => boolean;
  onChange: (filterValue: Category) => void;
}

export function BlogFilter({ getIsCategoryActive, onChange }: BlogFilterProps) {
  const handleChange = (filterValue: Category) => {
    onChange(filterValue);
  };

  return (
    <Flex gap="2rem">
      {Object.values(Category).map((category) => {
        return (
          <S.FilterCategory
            key={category}
            selected={getIsCategoryActive(category)}
            onClick={() => handleChange(category)}
          >
            {categoryTranslation(category)}
          </S.FilterCategory>
        );
      })}
    </Flex>
  );
}
