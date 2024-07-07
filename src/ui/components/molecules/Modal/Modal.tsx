import { PropsWithChildren, ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { Flex } from '../../atoms';

import * as S from './Modal.style';

interface ModalProps {
  open: boolean;
  title: string;
  actions?: ReactNode;
  onChange?: () => void;
}

export function Modal({
  open,
  title,
  actions,
  children,
  onChange,
}: PropsWithChildren<ModalProps>) {
  return (
    <Dialog.Root open={open} onOpenChange={onChange}>
      <Dialog.Portal>
        <S.DialogOverlay />
        <S.DialogContent>
          <Dialog.Title>
            <S.Headline>{title}</S.Headline>
          </Dialog.Title>
          <S.DialogDescription>
            <S.TextWrapper>{children}</S.TextWrapper>
          </S.DialogDescription>
          <Flex direction="row" gap="1rem" justify="space-between">
            {actions}
          </Flex>
        </S.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
