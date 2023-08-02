import { getPlaceDetail } from '../api/getPlaces';
import ScrollMaps from '../components/GoogleMaps/scrollMaps';

interface HomeProps {
  params: {};
  searchParams: {
    lat: string;
    lng: string;
  };
}

export default async function Page(props: HomeProps) {
  console.log('props', props.searchParams.lat, props.searchParams.lng);
  let places = await getPlaceDetail({
    lat: props.searchParams.lat,
    lng: props.searchParams.lng,
  });
  console.log('hi')
  return (
    <>
      <div className="w-full overflow-y-hidden flex flex-col">
        

        {/* hidden */}
        <div className="">
          <ScrollMaps places={places} />
        </div>
      </div>
    </>
  );
}
