import { consent } from 'nextjs-google-analytics';
import { useEffect, useState } from 'react';

import posthog from 'posthog-js';

import { Button, MaxWidth } from '~/ui/components/atoms';

import { CookieSettingsModal } from './parts';

import * as S from './CookieConsent.style';

export const CookieConsent = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    if (
      !posthog.has_opted_in_capturing() &&
      !posthog.has_opted_out_capturing()
    ) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptAll = () => {
    posthog.opt_in_capturing();

    setShowConsent(false);
  };

  const handleRejectAll = () => {
    posthog.opt_out_capturing();
    consent({
      arg: 'update',
      params: { ad_storage: 'denied', analytics_storage: 'denied' },
    });

    setShowConsent(false);
  };

  const handleSave = (hasAcceptedConsents: boolean) => {
    if (hasAcceptedConsents) {
      posthog.opt_in_capturing();
    } else {
      posthog.opt_out_capturing();

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
