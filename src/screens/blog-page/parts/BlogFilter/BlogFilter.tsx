import { Category, categoryTranslation } from '~/types';

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
    <S.BlogFilter>
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
    </S.BlogFilter>
  );
}
