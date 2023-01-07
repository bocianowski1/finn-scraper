import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsMegaphone } from "react-icons/bs";
import { FaBed } from "react-icons/fa";

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

const Advertisement = ({
  id,
  title,
  features,
  link,
  location,
  housingType,
  bedrooms,
  landlord,
  images,
}: Ad) => {
  const [pageNumber, setPageNumber] = useState(0);

  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      {features.monthlyRent && (
        <div
          className="bg-gradient-to-br from-gray-100 to-gray-200 mx-4
        my-8 rounded-xl shadow-xl w-auto 
        transition ease-in-out md:hover:-translate-y-1.5 
              hover:cursor-pointer hover:shadow-2xl duration-300"
        >
          <Link href={`/${id}`}>
            <div className="flex flex-col p-2">
              <div className="flex justify-around w-full h-48 md:h-40">
                <div className="aspect-auto w-full">
                  <img
                    src={images[0]}
                    alt=""
                    className="w-full h-full object-center 
                          object-cover rounded-tl-xl md:h-40"
                  />
                </div>
                <div className=" w-1 h-full" />
                <div className="aspect-auto w-full">
                  <img
                    src={images[1]}
                    alt=""
                    className="w-full h-full object-center 
                          object-cover rounded-tr-xl md:h-40"
                  />
                </div>
              </div>
              <div className="mx-2 py-4 md:h-60 ">
                <div className="flex justify-between md:flex-col">
                  <span className="font-thin text-sm md:my-2">{landlord}</span>
                  <span className=" font-extralight text-sm">
                    {location.address}
                  </span>
                </div>
                <div className="h-20">
                  {title.length >= 60 ? (
                    <h2 className="py-2 font-semibold md:pt-4">
                      {title.substring(0, 60) + "..."}
                    </h2>
                  ) : (
                    <h2 className="py-2 font-semibold md:pt-4">{title}</h2>
                  )}
                </div>

                <div className="py-2 grid grid-cols-2 gap-20 font-semibold relative">
                  <span>
                    {features.monthlyRent &&
                      formatter
                        .format(features.monthlyRent)
                        .substring(
                          1,
                          features.monthlyRent.toString().length === 3
                            ? features.monthlyRent.toString().length + 1
                            : features.monthlyRent.toString().length + 2
                        )
                        .replace(",", " ")}
                    {" kr"}
                  </span>
                  <div>
                    {features.squareMeters} m
                    <span className=" text-xs font-bold absolute">2</span>
                  </div>
                </div>
                <div className=" grid grid-cols-2 gap-20 ">
                  <span>{housingType}</span>
                  {bedrooms == 0 ? <></> : <span>{bedrooms} soverom</span>}
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Advertisement;
