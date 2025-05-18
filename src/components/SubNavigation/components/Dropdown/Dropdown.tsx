import { PropsWithChildren, useState } from 'react';

import * as S from './Dropdown.style';

interface DropdownProps extends PropsWithChildren {
  items?: {
    label: string;
    href: string;
  }[];
}

export function Dropdown({ children, items }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <S.DropdownPopover
      open={open}
      onChange={setOpen}
      action={
        <S.DropdownAction>
          {children}
          <S.ArrowDown weight="bold" />
        </S.DropdownAction>
      }
    >
      <S.DropdownContainer>
        {items?.map((item) => (
          <S.Link
            href={item?.href ?? ''}
            onClick={() => setOpen(false)}
            key={item.label}
          >
            <S.ListItem>{item.label}</S.ListItem>
          </S.Link>
        ))}
      </S.DropdownContainer>
    </S.DropdownPopover>
  );
}
