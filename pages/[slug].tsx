import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Error404 from "./Error404";

interface Props {
  params: {
    slug: string;
  };

  ad: Ad;
  error: Error;
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

export const getServerSideProps = async (context: any) => {
  const id = context.params.slug.split("-")[0].toString();
  const area = context.params.slug.split("-")[1];
  let ad = null;
  try {
    ad = await (
      await axios.get(`https://finn-api.herokuapp.com/${area}/${id}/`)
    ).data.ad;
  } catch (err) {
    console.log("error: ", err);
  }
  return {
    props: {
      ad,
    },
  };
};

const AdvertismentPage = ({ ad }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = () => {
    if (currentImage == 1) setCurrentImage(0);
    else setCurrentImage(1);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  if (ad)
    return (
      <div className="bg-stone-300 pt-36 pb-12 lg:px-64">
        <div
          className="bg-neutral-100
                    p-4 mx-4 rounded-xl shadow-md flex flex-col"
        >
          <div
            className="flex w-full mt-4 md:mt-6 lg:mb-6 lg:mt-12 h-48 md:h-72
           lg:h-96  lg:mx-auto lg:px-16 
        "
          >
            <div
              className="text-zinc-500 flex justify-center items-center text-4xl md:text-5xl lg:text-6xl 
            md:my-16 w-12 md:w-20 lg:w-28
            hover:cursor-pointer hover:text-black duration-300"
              onClick={() => changeImage()}
            >
              <FaCaretLeft className=" transition ease-in-out" />
            </div>
            <div className="aspect-auto w-full shadow-xl rounded-xl md:mx-4 lg:mx-12">
              <img
                src={ad.images[currentImage]}
                alt=""
                className="w-full h-full object-center rounded-xl
                          object-cover"
              />
            </div>
            <div
              className="text-zinc-500 flex justify-center items-center text-4xl md:text-5xl lg:text-6xl 
            md:my-16 w-12 md:w-20 lg:w-28
            hover:cursor-pointer hover:text-black duration-300"
              onClick={() => changeImage()}
            >
              <FaCaretRight />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col">
              <h1
                className="py-6 font-medium text-3xl 
                        md:text-4xl md:py-8 md:px-2 
                        lg:px-4 lg:text-5xl"
              >
                {ad.title}
              </h1>
              <a
                href={ad.link}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-b from-stone-100 to-neutral-100 
            shadow-xl rounded-xl p-2 my-2 border-stone-300 border
            md:fixed md:bottom-4 md:right-16 md:px-8 
            lg:flex lg:items-center lg:justify-center lg:w-1/4 lg:h-12
          transition ease-in-out hover:-translate-y-0.5 
          hover:cursor-pointer duration-300"
              >
                <p className="text-center lg:text-lg">
                  Se annonsen hos Finn.no
                </p>
              </a>
            </div>
            <div
              className="bg-gradient-to-br from-stone-200 to-neutral-100 
                        border border-gray-300 shadow-lg rounded-tl-3xl rounded-br-3xl my-6 md:mb-12"
            >
              <div className="text-lg py-2 px-4">
                <h3
                  className="text-center font-semibold my-4 pb-4
                            md:text-left md:text-xl
                            lg:text-left lg:text-2xl"
                >
                  {ad.location.address}
                </h3>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <span className="font-medium">Månedsleie</span>
                    <span className="font-semibold text-2xl">
                      {formatter
                        .format(ad.features.monthlyRent)
                        .substring(
                          1,
                          ad.features.monthlyRent.toString().length === 3
                            ? ad.features.monthlyRent.toString().length + 1
                            : ad.features.monthlyRent.toString().length + 2
                        )
                        .replace(",", " ")}
                      {" kr"}
                    </span>
                  </div>
                  <div className="py-2 font-thin grid grid-cols-1 gap-1">
                    <div>
                      <span className="font-medium mr-4">Primærrom:</span>
                      {ad.features.squareMeters} m
                      <span className="text-xs absolute">2</span>
                    </div>
                    <div>
                      <span className="font-medium mr-4">Utleier:</span>
                      {ad.landlord}
                    </div>
                    <div>
                      <span className="font-medium mr-4">Soverom:</span>
                      {ad.bedrooms}
                    </div>
                    <div>
                      <span className="font-medium mr-4">Boligtype:</span>
                      {ad.housingType}
                    </div>
                    <div className="flex flex-col py-4">
                      <span className="font-medium mr-4">Beskrivelse</span>
                      {ad.housingType} i {ad.location.city} med {ad.bedrooms}{" "}
                      soverom.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else return <Error404 />;
};

export default AdvertismentPage;
