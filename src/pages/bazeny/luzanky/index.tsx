import { LuzankyPoolScreen } from '~/screens/luzanky-pool-page';
import { SwimmingPoolPageContextProvider } from '~/screens/luzanky-pool-page/contexts/SwimmingPoolContext';
import { SwimmingPoolId } from '~/types';

export default function LuzankyPoolPage() {
  return (
    <SwimmingPoolPageContextProvider swimmingPoolId={SwimmingPoolId.LUZANKY}>
      <LuzankyPoolScreen />
    </SwimmingPoolPageContextProvider>
  );
}
