import Image from 'next/image';
import WaveYellow from '~/public/icons/wave.svg';

// import { PortableText } from "@portabletext/react";

import { Flex, MaxWidth, Text } from '~/ui/components/atoms';
import * as S from './LuzankyAboutSection.style';

export function LuzankyAboutSection() {
  // const { actualities } = useSanityHomeContext();

  return (
    <S.AboutSection>
      <MaxWidth variant="small">
        <Flex justify="center">
          <Image src={WaveYellow} alt="vlnka" height={50} width={50} />
        </Flex>

        {/* //TODO: az vytvorim novou sekci v sanity, tak je potreba propojit */}

        {/* {actualities?.map((actuality, index) => {
          return (
            <PortableText
              value={actuality?.text}
              key={`${actuality?.title}_${index}`}
              components={{
                block: {
                  normal: (props) => {
                    return <Text center>{props.children}</Text>;
                  },
                },
              }}
            />
          );
        })} */}

        <Text align="center">
          Naše plavecká škola pracuje pod záštitou plaveckého oddílu KPSP Kometa
          Brno. Naší specializací je výuka plavání dětí předškolního a školního
          věku. V plavecké přípravě dětí jsme nasbírali během řady let mnoho
          zkušeností a díky tomu můžeme dětem nabídnout komplexní výuku plavání
          podle nejnovějších metodik. Výuku zajišťují certifikovaní trenéři,
          kteří patří mezi špičku v trenérské branži.
        </Text>

        <Flex justify="center">
          <Image src={WaveYellow} alt="vlnka" height={50} width={50} />
        </Flex>
      </MaxWidth>
    </S.AboutSection>
  );
}
