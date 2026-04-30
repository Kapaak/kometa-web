import { useEffect, useRef } from 'react';

import { importLibrary, setOptions } from '@googlemaps/js-api-loader';

import { useGetSwimmingPools } from '~/adapters/swimmingPoolAdapter';
import { convertComponentToNode } from '~/utils/transform';

import { Marker, MarkerInfo } from './parts';

import * as S from './GoogleMap.style';

setOptions({
  key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
  v: 'weekly',
  language: 'cs',
});

type SwimmingPoolBase = {
  id: string | null;
  name: string | null;
  url: string | null;
  address: string;
  isPrivate: boolean;
};
interface GoogleMapProps {
  onClick?: (arg: SwimmingPoolBase) => void;
}

export function GoogleMap({ onClick }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const { data } = useGetSwimmingPools();

  useEffect(() => {
    const initMap = async () => {
      try {
        const { Map, InfoWindow } = await importLibrary('maps');
        const { AdvancedMarkerElement } = await importLibrary('marker');

        const position = {
          lat: 49.195061,
          lng: 16.606836,
        };

        const mapOptions = {
          center: position,
          zoom: 11,
          mapId: 'DEMO_MAP_ID',
        };

        if (!mapRef.current) return;

        const map = new Map(mapRef.current, mapOptions);

        //keep track of the last opened info window so that I can close it before opening another one
        let lastOpenedInfoWindow: google.maps.InfoWindow | null = null;

        if (data && data?.length > 0) {
          data?.forEach(async (pool) => {
            const swimmingPoolLocation = {
              lat: pool?.location?.lat ?? 0,
              lng: pool.location?.lng ?? 0,
            };

            const markerNode = convertComponentToNode(<Marker />);
            const infoWindowNode = convertComponentToNode(
              <MarkerInfo address={pool?.address} url={pool?.url} />
            );

            const advancedMarker = new AdvancedMarkerElement({
              position: swimmingPoolLocation,
              map,
              content: markerNode,
            });

            const infoWindow = new InfoWindow({
              content: infoWindowNode,
              headerContent: pool?.name,
              minWidth: 10,
            });

            advancedMarker.addListener('click', () => {
              if (lastOpenedInfoWindow) {
                lastOpenedInfoWindow.close();
              }

              infoWindow.open(map, advancedMarker);

              lastOpenedInfoWindow = infoWindow;
            });
          });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        console.log(e.message, 'err');
      }
    };

    initMap();
  }, [data, onClick]);

  return <S.GoogleMap id="DEMO_MAP_ID" className="google-map" ref={mapRef} />;
}
