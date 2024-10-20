import { PropsWithChildren, ReactNode } from 'react';

import { X } from '@phosphor-icons/react';
import * as RadixUiPopover from '@radix-ui/react-popover';

import * as S from './Popover.style';

interface PopoverProps extends PropsWithChildren {
  title?: string;
  action?: ReactNode;
  //allow styling via styled-components
  className?: string;
}

export function Popover({ action, title, className, children }: PopoverProps) {
  return (
    <RadixUiPopover.Root>
      <RadixUiPopover.Trigger asChild>{action}</RadixUiPopover.Trigger>
      <RadixUiPopover.Portal>
        <S.PopoverContent sideOffset={5} className={className}>
          <S.PopoverHeader>
            {title && <S.PopoverTitle>{title}</S.PopoverTitle>}
            <S.PopoverClose aria-label="Close">
              <X size={20} />
            </S.PopoverClose>
          </S.PopoverHeader>

          {children}

          <S.PopoverArrow />
        </S.PopoverContent>
      </RadixUiPopover.Portal>
    </RadixUiPopover.Root>
  );
}
