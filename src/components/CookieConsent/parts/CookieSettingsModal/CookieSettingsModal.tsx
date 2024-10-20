import { Fragment } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { CookieConsent, CookieConsentType } from '~/types';
import { Button, Text } from '~/ui/components/atoms';
import { Modal } from '~/ui/components/molecules';
import {
  initializeCookieConsent,
  transformCookieConsent,
} from '~/utils/cookies';

import { CookieSetingsItem } from '../CookieSettingsItem';

import * as S from './CookieSettingsModal.style';

import { cookieSettingsData } from './CookieSettingsModal.data';

type CookieSettingsFormValue = Record<CookieConsentType, boolean>;

interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRejectAll: () => void;
  onSave: (cookiePermission: CookieConsent) => void;
}

export const CookieSettingsModal = ({
  isOpen,
  onRejectAll,
  onSave,
  onClose,
}: CookieSettingsModalProps) => {
  const form = useForm<CookieSettingsFormValue>({
    defaultValues: initializeCookieConsent(true),
  });

  const { handleSubmit } = form;

  const handleRejectAll = () => {
    onRejectAll();
    onClose();
  };

  const handleSave = (formValues: CookieSettingsFormValue) => {
    const cookiePermission = transformCookieConsent(formValues);

    onSave(cookiePermission);
    onClose();
  };

  return (
    <Modal
      title="Nastavení cookies"
      open={isOpen}
      onChange={onClose}
      actions={
        <S.CookieSettingsActions>
          <Button type="button" variant="outlined" onClick={handleRejectAll}>
            Odmítnout vše
          </Button>
          <Button
            type="button"
            variant="filled"
            onClick={handleSubmit(handleSave)}
          >
            Uložit
          </Button>
        </S.CookieSettingsActions>
      }
    >
      <FormProvider {...form}>
        <form>
          <Text>Vyberte, jaké soubory cookies chcete přijmout.</Text>
          <S.CookieSettingsDivider />
          <S.CookieConsentContainer>
            {cookieSettingsData.map((cookie) => (
              <Fragment key={cookie.name}>
                <CookieSetingsItem title={cookie.title} name={cookie.name}>
                  {cookie.description}
                </CookieSetingsItem>
                <S.CookieSettingsDivider />
              </Fragment>
            ))}
          </S.CookieConsentContainer>
        </form>
      </FormProvider>
    </Modal>
  );
};
