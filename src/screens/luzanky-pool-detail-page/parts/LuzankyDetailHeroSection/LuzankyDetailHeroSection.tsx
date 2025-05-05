import {
  ArrowsHorizontal,
  Baby,
  CheckCircle,
  SwimmingPool,
  Thermometer,
  Timer,
} from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';
import { useGetLecturesForSwimmingPoolAndCategory } from '~/adapters/coursesAdapter';
import { useGetSwimmingPoolById } from '~/adapters/swimmingPoolAdapter';
import { SanityLecture } from '~/domains';
import { SwimmingPoolId } from '~/types';
import {
  Button,
  Headline,
  MaxWidth,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';
import { IconText } from '~/ui/components/molecules';
import { getCategoryIdBySlug } from '~/utils/category';
import { Calendar } from '../../components';
import { luzankyPoolDetailInformation } from '../../constants';
import * as S from './LuzankyDetailHeroSection.style';

const LECTURE_DURATION = 55;

function getUniqueSortedDayIds(lectures?: SanityLecture[]): number[] {
  const uniqueDays = Array.from(
    new Set(lectures?.map((lecture) => Number(lecture.dayId)))
  );

  return uniqueDays.sort((a, b) => a - b);
}

function getUniqueSortedTimes(lectures?: SanityLecture[]): number[] {
  const uniqueTimes = Array.from(
    new Set(lectures?.map((lecture) => Number(lecture.timeFrom?.split(':')[0])))
  );

  return uniqueTimes.sort((a, b) => a - b);
}

export function LuzankyDetailHeroSection() {
  const theme = useTheme();
  const { primary } = theme.colors;

  const router = useRouter();
  console.log('🚀 ~ LuzankyDetailHeroSection ~ router:', router);

  const { data: lectures } = useGetLecturesForSwimmingPoolAndCategory(
    getCategoryIdBySlug(router.query.categoryId as string),
    SwimmingPoolId.LUZANKY
  );
  const { data: swimmingPool } = useGetSwimmingPoolById('luzanky');

  const minimumLecturePrice = Math.min(
    ...(lectures
      ?.map((lecture) => lecture?.priceSemester)
      .filter((price): price is number => price != null) || [])
  );

  const minimumAge = Math.min(
    ...(lectures
      ?.map((lecture) => lecture?.ageFrom)
      .filter((age): age is number => age != null) || [])
  );

  const calendarData = lectures
    ?.filter((lecture) => lecture?.dayId)
    .map((lecture) => ({
      day: lecture.dayId as number,
      time: lecture.timeFrom ? Number(lecture.timeFrom.split(':')[0]) : 0,
      full: lecture?.isFull ?? false,
      discount: lecture?.discount,
    }));

  return (
    <S.Section>
      <MaxWidth>
        <S.SectionCard>
          <S.SectionContainer>
            <S.SectionDescriptionContainer>
              <S.SectionTextContainer>
                <Headline variant="h1">Kondiční plavání</Headline>
                <Text variant="body2">
                  Tento kurz je určen pro děti, které již zvládají základní
                  plavecké styly a chtějí se zaměřit na zlepšení své techniky a
                  vytrvalosti.
                </Text>

                <S.SectionPriceContainer>
                  <Text variant="body3">
                    Cena kurzu je od {minimumLecturePrice || '-'} Kč za pololetí
                  </Text>
                </S.SectionPriceContainer>

                <Text variant="body2">
                  Součástí ceny je vždy pronájem bazénu, profesionální trenéři a
                  kvalitní pomůcky, které pomohou zefektivnit výuku plavání.
                </Text>
              </S.SectionTextContainer>

              <S.SectionInformationContainer>
                <VerticalStack gap="1rem">
                  <Text variant="body3" as="h2">
                    Základní informace
                  </Text>

                  <IconText
                    icon={Baby}
                    iconColor={primary.main}
                    text={`pro děti od ${minimumAge} let`}
                  />
                  <IconText
                    icon={Timer}
                    iconColor={primary.main}
                    text={`${LECTURE_DURATION} min`}
                  />
                  {swimmingPool?.totalLength && (
                    <IconText
                      icon={ArrowsHorizontal}
                      iconColor={primary.main}
                      text={`Délka bazénu: ${swimmingPool.totalLength} m`}
                    />
                  )}
                  {swimmingPool?.depth && (
                    <IconText
                      icon={SwimmingPool}
                      iconColor={primary.main}
                      text={`Maximální hloubka: ${swimmingPool.depth} m`}
                    />
                  )}
                  {swimmingPool?.temperature && (
                    <IconText
                      icon={Thermometer}
                      iconColor={primary.main}
                      text={`Teplota vody: ${swimmingPool.temperature} °C`}
                    />
                  )}
                </VerticalStack>

                <VerticalStack gap="1rem">
                  <Text variant="body3" as="h2">
                    Potřebné dovednosti dítěte před nástupem do kurzu
                  </Text>

                  {luzankyPoolDetailInformation.skillsNeeded.map((skill) => (
                    <IconText
                      key={skill}
                      icon={CheckCircle}
                      text={skill}
                      iconColor={primary.main}
                    />
                  ))}
                </VerticalStack>
              </S.SectionInformationContainer>
            </S.SectionDescriptionContainer>

            <S.SectionActionsContainer>
              <S.SectionCalendarContainer>
                <Calendar
                  days={getUniqueSortedDayIds(lectures)}
                  times={getUniqueSortedTimes(lectures)}
                  data={calendarData ?? []}
                  onClick={(dayId, time) =>
                    router.push(
                      `/bazeny/luzanky/zakladni-plavani/prihlasky?day=${dayId}&time=${time}`
                    )
                  }
                />
              </S.SectionCalendarContainer>

              <S.SectionActionLink href="/bazeny/luzanky/zakladni-plavani/prihlasky">
                <Button color="secondary">Přihlásit se</Button>
              </S.SectionActionLink>
            </S.SectionActionsContainer>
          </S.SectionContainer>
        </S.SectionCard>
      </MaxWidth>
    </S.Section>
  );
}
