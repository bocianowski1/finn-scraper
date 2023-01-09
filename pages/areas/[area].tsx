import axios from "axios";
import AdContainer from "../../components/AdContainer";

interface Props {
  area: string;
  ads: Ad[];
}

interface Ad {
  id: number;
  area: string;
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

// export const getStaticPaths = async () => {
//   const res = await axios.get("http://localhost:8000/");
//   const data = await res.data.result;

//   const paths = data.map((ad: Ad) => {
//     return {
//       params: {
//         id: ad.id.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (context: any) => {
  const area = context.params.area;
  const res = await axios.get(`http://localhost:8000/${area}`);
  const ads = await res.data.result;

  return {
    props: {
      area,
      ads,
    },
  };
};

const Test = ({ area, ads }: Props) => {
  return (
    <div className="py-40 px-8">
      <AdContainer area={area} ads={ads} />
    </div>
  );
};

export default Test;
