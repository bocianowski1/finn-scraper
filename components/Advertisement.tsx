import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

const Advertisement = ({
  id,
  area,
  title,
  features,
  link,
  location,
  housingType,
  bedrooms,
  landlord,
  images,
}: Ad) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const formatPrice = (price: number) => {
    const string = price.toString();
    if (string.length == 4)
      return string.replace(string[0], string[0] + " ") + " kr";
    if (string.length == 5)
      return string.replace(string[1], string[1] + " ") + " kr";
    if (string.length == 6)
      return string.replace(string[2], string[2] + " ") + " kr";
    else return string + " kr";
  };

  const slug = `${id}-${area}`;

  return (
    <>
      {features.monthlyRent && (
        <div
          className="bg-gradient-to-tl from-stone-200 to-neutral-100 mx-4
        my-8 rounded-tl-3xl rounded-br-3xl shadow-xl w-auto border-stone-300 border
        transition ease-in-out md:hover:-translate-y-1.5 
              hover:cursor-pointer hover:shadow-2xl duration-300"
        >
          <Link href={`/${slug}`}>
            <div className="flex flex-col p-2 m-auto">
              <div className="flex justify-around w-full h-48 md:h-40">
                <div className="aspect-auto w-full">
                  <img
                    src={images[0]}
                    alt=""
                    className="w-full h-full object-center 
                          object-cover rounded-tl-3xl md:h-40"
                  />
                </div>
                <div className="w-2 h-full" />
                <div className="aspect-auto w-full">
                  <img
                    src={images[1]}
                    alt=""
                    className="w-full h-full object-center 
                          object-cover md:h-40"
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
                  <span>{formatPrice(features.monthlyRent)}</span>
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
