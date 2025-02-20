import { ArrowRight } from '@phosphor-icons/react';
import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import FoundersCupImage from '~/public/images/cups/pohar-zakladatelu.jpg';
import {
  Flex,
  IconButton,
  MaxWidth,
  Select,
  Strong,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';
import { FoundersCupBanner } from '../../components';
import {
  CONTEST_TIME_TABLE_PART1,
  CONTEST_TIME_TABLE_PART2,
  CUP_RESULT_HISTORY_IMAGES,
} from '../../constants';
import * as S from './FoundersCupSection.style';

interface FoundersCupSectionProps {}

export function FoundersCupSection({}: FoundersCupSectionProps) {
  const [resultHistoryValue, setResultHistoryValue] = useState(
    CUP_RESULT_HISTORY_IMAGES[0].value
  );

  const currentHistoryImage = CUP_RESULT_HISTORY_IMAGES.find(
    (item) => item.value === resultHistoryValue
  );

  const theme = useTheme();
  const { primary } = theme.colors;

  const selectValues = CUP_RESULT_HISTORY_IMAGES.map((item) => ({
    label: item.name,
    value: item.value,
  }));

  return (
    <S.FoundersCupSection>
      <MaxWidth>
        <FoundersCupBanner
          title="O ceny zakladatelů brněnského plavání"
          description="Klub plaveckých sportů policie Kometa Brno vás vítá na nejstarším plaveckém závodě
na území České republiky - 77. ročníku „O ceny zakladatelů brněnského plavání“."
          imageUrl="/images/banner/cup.jpg"
          url="https://vysledky.czechswimming.cz/souteze/9745"
          actionLabel="Stránky soutěže"
        />
        <MaxWidth variant="small">
          <VerticalStack gap="2.4rem">
            <S.ImageContainer aspectRatio="400 / 283">
              <Image
                alt="Pohár zakladatelů brněnského plavání"
                fill
                objectFit="contain"
                placeholder="blur"
                src={FoundersCupImage}
              />
            </S.ImageContainer>
            <VerticalStack gap="2rem">
              <Text color={primary.main}>
                <Strong>I. ročník těchto závodů proběhl už v roce 1937.</Strong>{' '}
                Mladým brněnským plavcům věnoval{' '}
                <Strong>Stříbrný věnec primář MUDr. Antonín Novotný</Strong> a
                ti o něj závodili až do roku 1945, kdy byla tato soutěž
                přerušena na plných 12 let. V roce 1957 byly tyto plavecké
                závody pro mládež znovu obnoveny a Stříbrný věnec, jako hlavní
                cena, byl věnován staršímu žactvu (nejlepšímu žákovi nebo
                žákyni). Soutěž byla v tomto roce dále rozšířena o 3 hlavní
                poháry: <Strong>Pohár JUDr. Otakara Vláčilíka</Strong>, o který
                závodí starší žactvo (do dnešní doby je systém zaveden tak, že
                pokud Stříbrný věnec získá žák, pak Pohár žákyně a naopak),{' '}
                <Strong>Pohár profesora Majdy</Strong> určen pro mladší žáky a{' '}
                <Strong>Pohár Karla Hnátka</Strong> pro mladší žákyně.
              </Text>
              <Text color={primary.main}>
                V roce 1983 byla dále soutěž rozšířena o{' '}
                <Strong>Pohár bratří Vognárků</Strong> pro starší žákyně a v r.
                1995 o <Strong>Pohár Jiřího Gazárka</Strong> pro starší žáky.
              </Text>
              <Text color={primary.main}>
                Poháry jsou putovní a na listinách vítězů můžete najít jména
                pozdějších úspěšných reprezentantů Československa, posléze České
                republiky.
              </Text>
              <Text color={primary.main}>
                JUDr. Otakar Vláčilík byl jedním ze zakladatelů Československého
                plaveckého svazu v roce 1919 a též jeho předsedou. Prof.
                František Majda a Karel Hnátek se v době první republiky starali
                zejména o brněnskou mládež a měli zásluhu na tom, že se plavání
                stalo součástí tělesné výchovy na školách. Vytvořili pevnou
                základnu, ze které dodnes vycházejí nejenom talentovaní plavci,
                ale i cvičitelé a trenéři jakými byli například Jiří Gazárek
                nebo Milan a Jiří Vognárkovi. Vyhlašování vítězů je prováděno v
                každé disciplíně, ale vítězové hlavních pohárů vzejdou na
                základě nejlépe bodovaného výkonu v jednotlivých kategoriích.
                Nestačí proto pouze zvítězit, ale je zároveň důležité zaplavat
                kvalitní čas.
              </Text>
              <Text color={primary.main}>
                Za Vaši návštěvu a přízeň brněnskému plavání děkuje pořádající
                klub KPSP Kometa Brno.
              </Text>
            </VerticalStack>
          </VerticalStack>

          <Flex>
            <S.CzechSwimmingLink href="https://vysledky.czechswimming.cz/souteze/9745">
              <IconButton icon={<ArrowRight size={20} />}>
                Český svaz plaveckých sportů
              </IconButton>
            </S.CzechSwimmingLink>
          </Flex>

          <S.Content>
            <S.Subheadline>Rozpis soutěže</S.Subheadline>
            <S.ContestDescriptionContainer gap="5rem" justify="space-between">
              <VerticalStack gap="1rem">
                <Text variant="body3" color={primary.main}>
                  VŠEOBECNÁ USTANOVENÍ
                </Text>
                <Text color={primary.main}>
                  <Strong>Pořadatel:</Strong> KPSP Kometa Brno
                </Text>
                <Text color={primary.main}>
                  <Strong>Datum a místo konání:</Strong> 22. 2. 2025
                  Brno-Lužánky (50m)
                </Text>
                <Text color={primary.main}>
                  <Strong>Přihlášky:</Strong> Závody jsou určené pouze pro
                  Brněnské oddíly!!! Přihlášky se provádějí přes IS ČSPS
                  nejpozději do 13. 2. 2025. Závodníci a závodnice ročníků
                  2011–2015 mohou startovat ve 3 disciplínách. Závodnící a
                  závodnice ročníku 2016 ve 2 disciplínách.
                </Text>
                <Text color={primary.main}>
                  <Strong>Odhlášky:</Strong> přes IS ČSPS do 20. 2. 2025.
                  Odhlášky po termínu je vysílající oddíl povinen uhradit.
                </Text>
                <Text color={primary.main}>
                  <Strong>Startovné:</Strong> 100 Kč za každý přijatý start
                  uhradí vedoucí družstva během závodů.
                </Text>
                <Text color={primary.main}>
                  <Strong>Informace:</Strong> Roman Havrlant, email:
                  zakladatele@kometaplavani.cz
                </Text>
              </VerticalStack>

              <VerticalStack gap="1rem">
                <Text variant="body3" color={primary.main}>
                  TECHNICKÁ USTANOVENÍ
                </Text>
                <Text color={primary.main}>
                  <Strong>Startující:</Strong> Žáci a žačky kategorie A (roč.
                  2011-2012), B (roč. 2013-2014), C (roč. 2015-2016).
                </Text>
                <Text color={primary.main}>
                  <Strong>Ceny:</Strong> Závodníci, kteří se umístí na 1. -3.
                  místě obdrží diplom. Držitel absolutně nejhodnotnějšího výkonu
                  v každé kategorii bude odměněn putovním pohárem, diplomem
                  “Zakladatelů brněnského plavání” a pohárem do osobního držení.
                </Text>
              </VerticalStack>
            </S.ContestDescriptionContainer>
          </S.Content>

          <S.Content>
            <S.Subheadline>Časový pořad disciplín</S.Subheadline>
            <Text color={primary.main}>
              <Strong>Rozplavání:</Strong> 8:00 až 8:25
            </Text>
            <S.TimeTableContainer>
              <VerticalStack gap="1rem">
                {CONTEST_TIME_TABLE_PART1.map((item) => (
                  <S.TimeTableGrid key={item.id}>
                    <Text color={primary.main}>{item.id}.</Text>
                    <Text color={primary.main}>{item.title}</Text>
                    <Text color={primary.main}>{item.group}</Text>
                  </S.TimeTableGrid>
                ))}
              </VerticalStack>
              <VerticalStack gap="1rem">
                {CONTEST_TIME_TABLE_PART2.map((item) => (
                  <S.TimeTableGrid key={item.id}>
                    <Text color={primary.main}>{item.id}.</Text>
                    <Text color={primary.main}>{item.title}</Text>
                    <Text color={primary.main}>{item.group}</Text>
                  </S.TimeTableGrid>
                ))}
                <VerticalStack>
                  <Text variant="body3" color={primary.main}>
                    Vyhlášení vítězů všech disciplín
                  </Text>
                  <Text variant="body3" color={primary.main}>
                    Vyhlášení nejlepších výkonů žáků a žaček kategorie A, B a C
                  </Text>
                </VerticalStack>
              </VerticalStack>
            </S.TimeTableContainer>
          </S.Content>

          <S.Content>
            <S.Subheadline>Historie výsledků</S.Subheadline>

            <Select
              value={resultHistoryValue}
              options={selectValues}
              onChange={(value) => setResultHistoryValue(value)}
            />

            {currentHistoryImage && (
              <S.ImageContainer
                key={currentHistoryImage.value}
                aspectRatio={currentHistoryImage.aspectRatio}
                removeMargin
              >
                <Image
                  alt={currentHistoryImage.name}
                  fill
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={currentHistoryImage.src}
                  src={currentHistoryImage.src}
                />
              </S.ImageContainer>
            )}
          </S.Content>
        </MaxWidth>
      </MaxWidth>
    </S.FoundersCupSection>
  );
}
