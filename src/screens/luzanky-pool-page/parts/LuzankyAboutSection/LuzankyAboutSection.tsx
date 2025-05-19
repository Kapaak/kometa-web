import Image from 'next/image';
import WaveYellow from '~/public/icons/wave.svg';

import { PortableText } from 'next-sanity';
import { useTheme } from 'styled-components';
import { Flex, Text } from '~/ui/components/atoms';
import { useSwimmingPoolPageContext } from '../../contexts/SwimmingPoolContext';
import * as S from './LuzankyAboutSection.style';

export function LuzankyAboutSection() {
  const theme = useTheme();
  const { primary } = theme.colors;

  const { swimmingPool } = useSwimmingPoolPageContext();

  return (
    <S.AboutSection>
      <Flex justify="center">
        <Image src={WaveYellow} alt="vlnka" height={50} width={50} />
      </Flex>

      {swimmingPool?.announcements?.map(
        (announcement) =>
          announcement?.text && (
            <PortableText
              value={announcement?.text}
              key={announcement.id}
              components={{
                block: {
                  normal: (props) => {
                    return (
                      <Text variant="body3" align="center" color={primary.main}>
                        {props.children}
                      </Text>
                    );
                  },
                },
              }}
            />
          )
      )}

      <Text variant="body2" align="center" color={primary.main}>
        Naše plavecká škola pracuje pod záštitou plaveckého oddílu KPSP Kometa
        Brno. Naší specializací je výuka plavání dětí předškolního a školního
        věku. V plavecké přípravě dětí jsme nasbírali během řady let mnoho
        zkušeností a díky tomu můžeme dětem nabídnout komplexní výuku plavání
        podle nejnovějších metodik. Výuku zajišťují certifikovaní trenéři, kteří
        patří mezi špičku v trenérské branži.
      </Text>

      <Flex justify="center">
        <Image src={WaveYellow} alt="vlnka" height={50} width={50} />
      </Flex>
    </S.AboutSection>
  );
}
