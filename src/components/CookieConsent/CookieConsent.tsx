import { consent } from 'nextjs-google-analytics';
import { useEffect, useState } from 'react';

import { cookieConsentGiven, updatePostHogConsent } from '~/libs/posthog';
import { Button, MaxWidth } from '~/ui/components/atoms';

import { CookieSettingsModal } from './parts';

import * as S from './CookieConsent.style';

export const CookieConsent = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showConsent, setShowConsent] = useState(false);

  const consentGiven = cookieConsentGiven();

  useEffect(() => {
    if (typeof window !== 'undefined' && !consentGiven) {
      setShowConsent(true);
    }
  }, [consentGiven]);

  const handleAcceptAll = () => {
    updatePostHogConsent(true);
    consent({
      arg: 'update',
      params: { ad_storage: 'allowed', analytics_storage: 'allowed' },
    });

    setShowConsent(false);
  };

  const handleRejectAll = () => {
    updatePostHogConsent(false);
    consent({
      arg: 'update',
      params: { ad_storage: 'denied', analytics_storage: 'denied' },
    });

    setShowConsent(false);
  };

  const handleSave = (hasAcceptedConsents: boolean) => {
    if (hasAcceptedConsents) {
      updatePostHogConsent(true);
      consent({
        arg: 'update',
        params: { ad_storage: 'allowed', analytics_storage: 'allowed' },
      });
    } else {
      updatePostHogConsent(false);
      consent({
        arg: 'update',
        params: { ad_storage: 'denied', analytics_storage: 'denied' },
      });
    }

    setShowConsent(false);
  };

  return (
    <>
      <CookieSettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        onSave={handleSave}
        onRejectAll={handleRejectAll}
      />
      {showConsent && (
        <S.CookieConsent>
          <MaxWidth>
            <S.Container>
              <S.Description>
                Tato webová stránka používá soubory cookies k zajištění správné
                funkčnosti a pro analýzu návštěvnosti. Kliknutím na tlačítko
                &bdquo;Přijmout vše&rdquo; dáváte souhlas s jejich používáním.
              </S.Description>
              <S.ButtonContainer>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={() => setShowSettings(true)}
                >
                  Nastavení
                </Button>
                <Button
                  type="button"
                  variant="filled"
                  onClick={handleAcceptAll}
                >
                  Přijmout vše
                </Button>
              </S.ButtonContainer>
            </S.Container>
          </MaxWidth>
        </S.CookieConsent>
      )}
    </>
  );
};
