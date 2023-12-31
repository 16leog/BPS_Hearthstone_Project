import { getPlaceDetail } from '../api/getPlaces';
import ScrollMaps from '../components/GoogleMaps/scrollMaps';

interface HomeProps {
  params: {};
  searchParams: {
    lat: string;
    lng: string;
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const key = searchParams.lat as string;
  console.log(key);
  const key2 = searchParams.lng as string;
  console.log(key2);
  // console.log('props', props.searchParams.lat, props.searchParams.lng);
  let places = await getPlaceDetail({
    lat: key.toString(),
    lng: key2.toString(),
  });
  console.log('places', places);
  return (
    <>
      <div className="">
        <ScrollMaps places={places} />
      </div>
    </>
  );
}
