import axios from "axios";
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";

interface Props {
  params: {
    id: string;
  };
  ad: Ad[];
}

interface Ad {
  id: number;
  title: string;
  features: {
    squareMeters: number;
    monthlyRent: number;
  };
  link: string;
  location: {
    address: string;
    city: string;
  };
  housingType: string;
  bedrooms: number;
  landlord: string;
  images: string[];
}

export const getStaticPaths = async () => {
  const res = await axios.get("http://localhost:8000/0/");
  // const page = await res.data.page;
  const data = await res.data.result;

  const paths = data.map((ad: Ad) => {
    return {
      params: {
        id: ad.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;

  const res = await axios.get(`http://localhost:8000/0/${id}/`);
  const ad = await res.data.ad;

  return {
    props: {
      ad,
    },
  };
};

const AdvertismentPage = ({ ad }: Props) => {
  const add = ad[0];
  return (
    <div>
      <div className="flex justify-around w-full rounded-t-md">
        {add.images.length > 0 &&
          add.images.map((image) => (
            <div key={add.id + Math.random()} className="aspect-auto max-h-40">
              <img
                src={image}
                alt="no"
                className="w-full h-full object-center object-cover rounded-t-md"
              />
            </div>
          ))}
      </div>
      <h1>Hei: {add.title}</h1>
    </div>
  );
};

export default AdvertismentPage;
