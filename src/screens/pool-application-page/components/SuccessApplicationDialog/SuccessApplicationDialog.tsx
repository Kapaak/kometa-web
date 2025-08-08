import {
  Button,
  Divider,
  Strong,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';
import { Modal, ModalProps } from '~/ui/components/molecules';

import { useTheme } from 'styled-components';
import * as S from './SuccessApplicationDialog.style';

interface SuccessApplicationDialogProps extends Omit<ModalProps, 'title'> {
  onHomePageReturn: () => void;
  onClose: () => void;
  onResendEmail: () => void;
}

export function SuccessApplicationDialog({
  open,
  onHomePageReturn,
  onResendEmail,
  onClose,
}: SuccessApplicationDialogProps) {
  const theme = useTheme();
  const { grey } = theme.colors;

  return (
    <Modal
      title="vaše přihláška byla úspěšně odeslána"
      open={open}
      actions={
        <S.ButtonContainer>
          <Button onClick={onClose}>Vytvořit další přihlášku</Button>

          <S.ReturnButton variant="outlined" onClick={onHomePageReturn}>
            Zpět na úvodní stránku bazénu
          </S.ReturnButton>
        </S.ButtonContainer>
      }
    >
      <S.TextContainer>
        <Text variant="body3">
          Děkujeme za přihlášku, zaslali jsme vám potvrzovací e-mail.
        </Text>

        <Divider color={grey['500']} />

        <VerticalStack gap="1rem" align="flex-start">
          <Text>
            <Strong weight="400">
              V případě, že Vám e-mail nedorazil, můžete si ho nechat zaslat
              znova.
            </Strong>
          </Text>
          <Button variant="outlined" onClick={onResendEmail}>
            Znovu zaslat potvrzovací e-mail
          </Button>
        </VerticalStack>

        <Divider color={grey['500']} />

        <VerticalStack gap="1rem" align="flex-start">
          <Text>
            <Strong>Potřebujete pomoc? </Strong>V případě jakéhokoliv problému
            se porsím obraťte na tel. číslo 773708287, nebo na e-mail
            plavaniluzanky@kometaplavani.cz
          </Text>
          <Divider width="50%" color={grey['500']} />
        </VerticalStack>
      </S.TextContainer>
    </Modal>
  );
}
