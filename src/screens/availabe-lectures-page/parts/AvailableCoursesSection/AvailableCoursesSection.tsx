import { useEffect, useState } from 'react';

import { useGetAvailableCourses } from '~/adapters/coursesAdapter';
import { Gender } from '~/types';
import {
  Hidden,
  InfiniteScrollObserver,
  MaxWidth,
} from '~/ui/components/atoms';
import { Table } from '~/ui/components/organisms';

import {
  AvailableCoursesBanner,
  AvailableCoursesFilter,
  AvailableCoursesTableEmpty,
  AvailableCoursesTableError,
  MobileAvailableCoursesTable,
} from '../../components';
import { useAvailableCoursesFilterContext } from '../../contexts';
import { useAvailableCoursesTable } from '../../hooks';

import * as S from './AvailableCoursesSection.style';

import { banner } from './AvailableCoursesSection.data';

export function AvailableCoursesSection() {
  const [bannerData, setBannerData] = useState(banner.initial);
  const { filter } = useAvailableCoursesFilterContext();

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useGetAvailableCourses({
      filter,
    });

  const { table } = useAvailableCoursesTable(data);

  useEffect(() => {
    if (filter?.gender === Gender.FEMALE) {
      return setBannerData(banner.synchro);
    }

    setBannerData(banner.initial);
  }, [filter?.gender]);

  return (
    <S.AvailableCoursesSection>
      <MaxWidth>
        <AvailableCoursesBanner
          title={bannerData?.title}
          description={bannerData?.description}
          imageUrl={bannerData?.imageUrl}
          url={bannerData?.url}
          actionLabel={bannerData?.actionLabel}
        />

        <AvailableCoursesFilter />
        <Hidden down="md">
          <S.Scrollable>
            <Table
              isLoading={isLoading}
              headerCells={table?.getHeaderGroups()}
              bodyCells={table?.getRowModel()}
              showNoData={
                !isLoading && table?.getRowModel()?.rows?.length === 0
              }
              noDataChildren={
                <>
                  {isError && <AvailableCoursesTableError />}
                  {!isError && <AvailableCoursesTableEmpty />}
                </>
              }
            />
          </S.Scrollable>
        </Hidden>
        <Hidden up="md">
          <MobileAvailableCoursesTable
            availableCourses={data}
            isLoading={isLoading}
            isError={isError}
          />
        </Hidden>
      </MaxWidth>
      <InfiniteScrollObserver
        hasNextPage={hasNextPage}
        onLoadNextPage={() => void fetchNextPage()}
      />
    </S.AvailableCoursesSection>
  );
}
