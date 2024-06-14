import { useEffect, useRef } from 'react';

import { Loader } from '@googlemaps/js-api-loader';

import { useGetSwimmingPool } from '~/adapters';
import { LatLng } from '~/types';
import { convertComponentToNode } from '~/utils/transform';

import { Marker } from './parts';

import * as S from './GoogleMap.style';

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
  const mapRef = useRef(null);

  const { data } = useGetSwimmingPool();

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
        version: 'weekly',
        language: 'cs',
        libraries: ['geocoding'],
      });

      try {
        const { Map } = await loader.importLibrary('maps');
        const { Geocoder } = await loader.importLibrary('geocoding');
        const { AdvancedMarkerElement } = await loader.importLibrary('marker');

        const position = {
          lat: 49.195061,
          lng: 16.606836,
        };

        const mapOptions = {
          center: position,
          zoom: 11,
          mapId: 'DEMO_MAP_ID',
        };
        //Needs to be a node
        const map = new Map(mapRef.current, mapOptions);

        if (data && data?.length > 0) {
          data?.forEach(async (pool) => {
            const markerNode = convertComponentToNode(<Marker />);

            const swimmingPoolLocation = {
              lat: pool?.location?.lat ?? 0,
              lng: pool.location?.lng ?? 0,
            };

            const advancedMarker = new AdvancedMarkerElement({
              id: pool.id,
              position: swimmingPoolLocation,
              map,
              content: markerNode,
            });

            const geocoder = new Geocoder();

            const address = pool?.location
              ? await getAddressFromGeocode(swimmingPoolLocation, geocoder)
              : '';

            google.maps.event.addListener(advancedMarker, 'click', function () {
              onClick?.({
                id: pool?.id,
                name: pool?.name,
                address,
                url: pool?.url,
                isPrivate: pool?.privateSwimmingPool ?? false,
              });
            });
          });
        }
      } catch (e: any) {
        console.log(e.message, 'err');
      }
    };

    initMap();
  }, [data, onClick]);

  return <S.GoogleMap id="DEMO_MAP_ID" className="google-map" ref={mapRef} />;
}

function getAddressFromGeocode(
  location: LatLng,
  geocoder: google.maps.Geocoder
) {
  return new Promise<string>((resolve, reject) => {
    geocoder.geocode({ location }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          const address =
            results[0].formatted_address?.split(', Česko')[0] ?? '';
          resolve(address);
        } else {
          reject('No results found');
        }
      } else {
        reject('Geocoder failed due to: ' + status);
      }
    });
  });
}
