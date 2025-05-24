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
import { SanityLecture } from '~/domains';
import { useSwimmingPoolDetailPageContext } from '~/screens/luzanky-pool-detail-page/contexts/SwimmingPoolDetailPageContext';
import { SwimmingCategoryId } from '~/types';
import {
  Button,
  Flex,
  Headline,
  MaxWidth,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';
import { IconText } from '~/ui/components/molecules';
import { getCategoryNameByCategoryId } from '~/utils/category';
import { dayTranslationAbbr } from '~/utils/day';
import { Calendar, SemesterRange, TimeSlotPrice } from '../../components';
import { luzankyPoolDetailInformation } from '../../constants';
import { useAvailableLecturesContext } from '../../contexts/AvailableLecturesContext';
import * as S from './LuzankyDetailHeroSection.style';

export function LuzankyDetailHeroSection() {
  const theme = useTheme();
  const { primary } = theme.colors;

  const router = useRouter();

  const { swimmingPoolDetail, categoryId, isLoading } =
    useSwimmingPoolDetailPageContext();

  const { availableLectures, isLoading: isAvailableLecturesLoading } =
    useAvailableLecturesContext();

  const { poolParameters, description, duration } =
    luzankyPoolDetailInformation?.[categoryId]?.heroSection ?? {};

  const minimumLecturePrice = retrieveMinimumLectureAttribute(
    availableLectures,
    'priceSemester'
  );
  const minimumYearlyLecturePrice = retrieveMinimumLectureAttribute(
    availableLectures,
    'priceYear'
  );
  const minimumAge = retrieveMinimumLectureAttribute(
    availableLectures,
    'ageFrom'
  );

  const calendarData = availableLectures
    ?.filter((lecture) => lecture?.dayId)
    .map((lecture) => ({
      day: lecture.dayId as number,
      time: lecture.timeFrom ? Number(lecture.timeFrom.split(':')[0]) : 0,
      full: lecture?.isFull ?? false,
      discount: lecture?.discount,
    }));

  return (
    <S.HeroSection>
      <MaxWidth>
        <S.SectionCard>
          <S.SectionContainer>
            <S.SectionDescriptionContainer>
              <S.SectionTextContainer>
                <Headline variant="h1">
                  {getCategoryNameByCategoryId(categoryId)}
                </Headline>
                <Text variant="body2">{description}</Text>

                <VerticalStack gap="1rem">
                  <Text variant="body3">Cena kurzu je:</Text>

                  <Flex gap="1.2rem" wrap="wrap">
                    <TimeSlotPrice
                      isLoading={isLoading}
                      price={minimumLecturePrice}
                      timeSlotName={
                        categoryId === SwimmingCategoryId.KINDERGARTEN ||
                        categoryId === SwimmingCategoryId.SCHOOL
                          ? 'za žáka'
                          : 'za pololetí'
                      }
                    />
                    <TimeSlotPrice
                      isLoading={isLoading}
                      price={minimumYearlyLecturePrice}
                      timeSlotName={
                        categoryId === SwimmingCategoryId.KINDERGARTEN ||
                        categoryId === SwimmingCategoryId.SCHOOL
                          ? 'za žáka'
                          : 'za  celý školní rok'
                      }
                    />
                  </Flex>
                </VerticalStack>

                {categoryId !== SwimmingCategoryId.SCHOOL &&
                  categoryId !== SwimmingCategoryId.KINDERGARTEN && (
                    <Text variant="body2">
                      Více informací o platbě najdete v sekci{' '}
                      <Text as="span" variant="body3" color={primary.main}>
                        <S.Link
                          href="/bazeny/luzanky#zakladni-informace"
                          passHref
                        >
                          placení
                          {categoryId !== SwimmingCategoryId.ADULT
                            ? ' a vouchery'
                            : ''}
                          .{' '}
                        </S.Link>
                      </Text>
                    </Text>
                  )}

                <Text variant="body2">
                  Přehled dnů, kdy se nekonají lekce, je uveden v části{' '}
                  <Text as="span" variant="body3" color={primary.main}>
                    <S.Link href="/bazeny/luzanky#zakladni-informace">
                      kdy neplaveme
                    </S.Link>
                  </Text>
                  . Omlouvání z lekce není nutné. Snažíme se nabízet náhrady,
                  pokud je to možné, v termínech, které nejsou obsazené.{' '}
                  <Text as="span" variant="body3" color={primary.main}>
                    <S.Link href="/bazeny/luzanky#zakladni-informace">
                      Více o absencích a náhradách
                    </S.Link>
                  </Text>
                  .
                </Text>

                {categoryId === SwimmingCategoryId.KINDERGARTEN && (
                  <Text variant="body2">
                    Pokud máte zájem o plavání pro školy, napište nám na e-mail{' '}
                    <Text variant="body3" as="span">
                      plavaniluzanky@kometaplavani.cz
                    </Text>{' '}
                    nebo zavolejte na{' '}
                    <Text variant="body3" as="span">
                      +420 773 708 287
                    </Text>
                    .
                  </Text>
                )}

                {categoryId === SwimmingCategoryId.ADULT && (
                  <Text variant="body2">
                    První pololetí (polovina zaří - prosinec) je kratší než
                    druhé (leden - polovina června).
                  </Text>
                )}
              </S.SectionTextContainer>

              <S.SectionInformationContainer
                hasSkillRequirement={
                  (swimmingPoolDetail?.skillRequirement?.length ?? 0) > 0
                }
              >
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

            <S.SectionActionsContainer>
              <VerticalStack gap="1rem" align="center" height="100%">
                <SemesterRange
                  semesterFrom={swimmingPoolDetail?.dateRange?.dateFrom}
                  semesterTo={swimmingPoolDetail?.dateRange?.dateTo}
                  isLoading={isLoading}
                />

                <S.SectionCalendarContainer>
                  <Calendar
                    isLoading={isAvailableLecturesLoading}
                    days={Object.values(dayTranslationAbbr).map(
                      (_, index) => index + 1
                    )}
                    times={getUniqueSortedTimes(availableLectures)}
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
              </VerticalStack>
            </S.SectionActionsContainer>
          </S.SectionContainer>
        </S.SectionCard>
      </MaxWidth>
    </S.HeroSection>
  );
}

function getUniqueSortedTimes(lectures?: SanityLecture[]): number[] {
  const uniqueTimes = Array.from(
    new Set(lectures?.map((lecture) => Number(lecture.timeFrom?.split(':')[0])))
  );

  return uniqueTimes.sort((a, b) => a - b);
}

function retrieveMinimumLectureAttribute(
  lectures: SanityLecture[] | undefined,
  key: 'priceSemester' | 'priceYear' | 'ageFrom'
): number {
  if (!lectures || lectures.length === 0) {
    return 0;
  }

  const prices = lectures
    .filter((lecture) => !lecture?.isFull)
    .map((lecture) => lecture?.[key])
    .filter((price): price is number => price != null);

  return prices.length > 0 ? Math.min(...prices) : 0;
}
