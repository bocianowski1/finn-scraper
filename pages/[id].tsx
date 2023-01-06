import axios from "axios";
import { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

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
  const [currentImage, setCurrentImage] = useState(0);
  const add = ad[0];

  const changeImage = () => {
    if (currentImage == 1) setCurrentImage(0);
    else setCurrentImage(1);
  };

  return (
    <div className="bg-zinc-300 pt-36 pb-12">
      <div
        className="bg-gradient-to-br from-gray-100 to-gray-300
                      p-4 mx-4 rounded-xl shadow-md flex flex-col"
      >
        <div className="flex w-full h-48 mt-4">
          <div
            className="flex items-center text-5xl w-12
            hover:cursor-pointer hover:text-zinc-600 duration-300"
            onClick={() => changeImage()}
          >
            <FaCaretLeft className="transition ease-in-out" />
          </div>
          <div className="aspect-auto w-full">
            <img
              src={add.images[currentImage]}
              alt="no"
              className="w-full h-full object-center rounded-md
                          shadow-md object-cover md:h-40"
            />
          </div>
          <div
            className="flex items-center text-5xl w-12
            hover:cursor-pointer hover:text-zinc-600 duration-300"
            onClick={() => changeImage()}
          >
            <FaCaretRight />
          </div>
          {/* <div className=" w-6 h-full" />
          <div className="aspect-auto w-full">
            <img
              src={add.images[1]}
              alt="no"
              className="w-full h-full object-center rounded-md
                          shadow-md object-cover md:h-40
                          transition ease-in hover:absolute
                          hover:left-0 hover:px-8
                          hover:h-60 duration-300"
            />
          </div> */}
        </div>
        <div className="flex flex-col">
          <h1 className="text-left py-6 font-medium text-3xl">{add.title}</h1>
          <a
            href={add.link}
            target="_blank"
            className="bg-gradient-to-b from-neutral-200 to-zinc-300 shadow-lg text-center rounded-xl p-2 my-2
          transition ease-in-out hover:shadow-xl hover:-translate-y-0.5 
          hover:cursor-pointer duration-300"
          >
            <p className="px-0 text-center ">Se annonsen i Finn.no</p>
          </a>
        </div>
        <div
          className="bg-gradient-to-b from-neutral-200 to-zinc-300 
                        border border-gray-300 shadow-lg rounded-xl my-6"
        >
          <div className="text-lg py-2 px-4">
            <h3 className="text-center font-semibold my-4">
              {add.location.address}
            </h3>
            <div className="flex justify-between font-medium mx-2">
              <span>{add.features.monthlyRent} kr</span>
              <div className="mx-2">
                {add.features.squareMeters} m
                <span className=" text-xs font-bold absolute">2</span>
              </div>
            </div>
          </div>
          <div className="m-4">
            <h4>
              {add.housingType} i {add.location.city} med {add.bedrooms}{" "}
              soverom.
            </h4>
            <span>Utleier: {add.landlord}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertismentPage;
