import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { SlidersHorizontal } from '@phosphor-icons/react';

import { Category, categoryTranslation } from '~/types';
import { Button, Drawer, Text, VerticalStack } from '~/ui/components/atoms';
import { ControlledCheckbox } from '~/ui/components/molecules';
import {
  convertArrayToBooleanObject,
  convertBooleanObjectToArray,
} from '~/utils/transform';

import * as S from './BlogFIlterDrawer.style';

type BlogFilterData = Record<Category, boolean>;

interface BlogFilterDrawerProps {
  defaultSelectedFilter: Category[];
  onSubmit: (data: Category[]) => void;
}

export function BlogFilterDrawer({
  defaultSelectedFilter,
  onSubmit,
}: BlogFilterDrawerProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const form = useForm<BlogFilterData>({
    values: {
      equipment: false,
      funFact: false,
      tips: false,
      training: false,
      ...convertArrayToBooleanObject(defaultSelectedFilter),
    },
  });

  const { handleSubmit, reset } = form;

  const handleClose = () => {
    setDrawerOpen(false);
    reset();
  };

  const handleFormSubmit = (data: BlogFilterData) => {
    onSubmit(convertBooleanObjectToArray(data) as Category[]);
    setDrawerOpen(false);
  };

  return (
    <Drawer
      title="Články podle kategorie"
      onClose={handleClose}
      open={drawerOpen}
      action={
        <S.FilterButton onClick={() => setDrawerOpen(true)}>
          <Text variant="body2">Filtr</Text> <SlidersHorizontal />
        </S.FilterButton>
      }
    >
      <FormProvider {...form}>
        <VerticalStack
          gap="1.6rem"
          as="form"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          {Object.values(Category).map((category) => (
            <ControlledCheckbox
              key={category}
              name={category}
              label={categoryTranslation(category)}
            />
          ))}

          <Button type="submit">Potvrdit výběr</Button>
        </VerticalStack>
      </FormProvider>
    </Drawer>
  );
}
