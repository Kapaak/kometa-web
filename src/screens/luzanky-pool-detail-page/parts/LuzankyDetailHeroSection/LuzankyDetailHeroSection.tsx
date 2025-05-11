import {
  ArrowsHorizontal,
  Baby,
  CheckCircle,
  SwimmingPool,
  Thermometer,
  Timer,
  User,
} from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';
import { useGetLecturesForSwimmingPoolAndCategory } from '~/adapters/coursesAdapter';
import { SanityLecture } from '~/domains';
import { useSwimmingPoolDetailPageContext } from '~/screens/luzanky-pool-detail-page/contexts/SwimmingPoolDetailPageContext';
import { SwimmingCategoryId, SwimmingPoolId } from '~/types';
import {
  Button,
  Headline,
  MaxWidth,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';
import { IconText } from '~/ui/components/molecules';
import { getCategoryNameByCategoryId } from '~/utils/category';
import { dayTranslationAbbr } from '~/utils/day';
import { joinValues } from '~/utils/format';
import { formatToCurrency } from '~/utils/number';
import { Calendar } from '../../components';
import { luzankyPoolDetailInformation } from '../../constants';
import * as S from './LuzankyDetailHeroSection.style';

export function LuzankyDetailHeroSection() {
  const theme = useTheme();
  const { primary } = theme.colors;

  const router = useRouter();

  const { swimmingPoolDetail, categoryId } = useSwimmingPoolDetailPageContext();

  const { poolParameters, description, duration } =
    luzankyPoolDetailInformation?.[categoryId]?.heroSection ?? {};

  const { data: lectures } = useGetLecturesForSwimmingPoolAndCategory(
    categoryId,
    SwimmingPoolId.LUZANKY
  );

  const minimumLecturePrice = getMinimumLecturePrice(lectures);
  const minimumAge = getMinimumAge(lectures);

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
                <Headline variant="h1">
                  {getCategoryNameByCategoryId(categoryId)}
                </Headline>
                <Text variant="body2">{description}</Text>

                {minimumLecturePrice > 0 && (
                  <S.SectionPriceContainer>
                    <Text variant="body3">
                      {joinValues([
                        `Cena kurzu je od ${formatToCurrency(minimumLecturePrice)}`,
                        categoryId === SwimmingCategoryId.KINDERGARTEN ||
                        categoryId === SwimmingCategoryId.SCHOOL
                          ? 'za žáka'
                          : 'za pololetí',
                      ])}
                    </Text>
                  </S.SectionPriceContainer>
                )}

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

                  {minimumAge > 0 && (
                    <IconText
                      icon={
                        categoryId !== SwimmingCategoryId.ADULT ? Baby : User
                      }
                      iconColor={primary.main}
                      text={`${categoryId !== SwimmingCategoryId.ADULT ? `pro děti` : ''} od ${minimumAge} let`}
                    />
                  )}
                  <IconText
                    icon={Timer}
                    iconColor={primary.main}
                    text={`${duration} min`}
                  />
                  {poolParameters?.poolLength && (
                    <IconText
                      icon={ArrowsHorizontal}
                      iconColor={primary.main}
                      text={`Délka bazénu: ${poolParameters.poolLength}`}
                    />
                  )}
                  {poolParameters?.depth && (
                    <IconText
                      icon={SwimmingPool}
                      iconColor={primary.main}
                      text={`Maximální hloubka: ${poolParameters.depth}`}
                    />
                  )}
                  {poolParameters?.waterTemperature && (
                    <IconText
                      icon={Thermometer}
                      iconColor={primary.main}
                      text={`Teplota vody: ${poolParameters.waterTemperature}`}
                    />
                  )}
                </VerticalStack>

                {(swimmingPoolDetail?.skillRequirement?.length ?? 0) > 0 && (
                  <VerticalStack gap="1rem">
                    <Text variant="body3" as="h2">
                      Potřebné dovednosti před nástupem do kurzu
                    </Text>

                    {swimmingPoolDetail?.skillRequirement?.map((skill) => (
                      <IconText
                        key={skill}
                        icon={CheckCircle}
                        text={skill}
                        iconColor={primary.main}
                      />
                    ))}
                  </VerticalStack>
                )}
              </S.SectionInformationContainer>
            </S.SectionDescriptionContainer>

            {minimumLecturePrice > 0 && (
              <S.SectionActionsContainer>
                <S.SectionCalendarContainer>
                  <Calendar
                    days={Object.values(dayTranslationAbbr).map(
                      (_, index) => index + 1
                    )}
                    times={getUniqueSortedTimes(lectures)}
                    data={calendarData ?? []}
                    onClick={(dayId, time) =>
                      router.push(
                        `/bazeny/luzanky/${router.query.categoryId}/prihlasky?day=${dayId}&time=${time}`
                      )
                    }
                  />
                </S.SectionCalendarContainer>

                <S.SectionActionLink
                  href={`/bazeny/luzanky/${router.query.categoryId}/prihlasky`}
                >
                  <Button color="secondary">Přihlásit se</Button>
                </S.SectionActionLink>
              </S.SectionActionsContainer>
            )}
          </S.SectionContainer>
        </S.SectionCard>
      </MaxWidth>
    </S.Section>
  );
}

function getUniqueSortedTimes(lectures?: SanityLecture[]): number[] {
  const uniqueTimes = Array.from(
    new Set(lectures?.map((lecture) => Number(lecture.timeFrom?.split(':')[0])))
  );

  return uniqueTimes.sort((a, b) => a - b);
}

function getMinimumLecturePrice(lectures?: SanityLecture[]) {
  if (!lectures || lectures.length === 0) {
    return 0;
  }

  const prices = lectures
    ?.filter((lecture) => !lecture?.isFull)
    .map((lecture) => lecture?.priceSemester)
    .filter((price): price is number => price != null);

  return prices.length > 0 ? Math.min(...prices) : 0;
}

function getMinimumAge(lectures?: SanityLecture[]) {
  if (!lectures || lectures.length === 0) {
    return 0;
  }
  const ages = lectures
    ?.filter((lecture) => !lecture?.isFull)
    .map((lecture) => lecture?.ageFrom)
    .filter((age): age is number => age != null);
  return ages.length > 0 ? Math.min(...ages) : 0;
}
