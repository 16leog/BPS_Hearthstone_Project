import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';
import { PlaceClass } from '../../../../types';

const containerStyle = {
  width: '100vw',   // viewport width
  height: '100vh',  // viewport height
};

type GoogleMapProps = {
  places: PlaceClass[];
  center: any;
  clickBack: () => void;
  showDetails: (location: PlaceClass) => void;
};

export default function Maps({
  places,
  center,
  clickBack,
  showDetails,
}: GoogleMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ['places'] as any,
  });

  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null);

  return isLoaded ? (
    <div className="absolute  w-full h-full no-scrollbar">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        {places.map((place, index) => (
          <Marker
            key={index}
            onClick={() => {
              clickBack();
              showDetails(place);
            }}
            position={place.geometry.location}
            onMouseOver={() => setHoveredMarker(index)}
            onMouseOut={() => setHoveredMarker(null)}
            icon={{
              url:
                hoveredMarker === index
                  ? 'glowing map icon_2023-09-01/glowing map icon.webp'
                  : 'logo icon_2023-08-02/logo icon.webp',
            }}
            options={{
              animation:
                hoveredMarker === index ? google.maps.Animation.DROP : null,
            }}
          />
        ))}
      </GoogleMap>
    </div>
  ) : (
    <div className="flex gap-10 min-h-screen overflow-y-none items-center justify-center">
      <h1 className="font-aclonica text-white text-7xl">Loading...</h1>
    </div>
  );
}
