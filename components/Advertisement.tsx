import Link from "next/link";
import React from "react";

interface Ad {
  title: string;
  // features: {
  //   squareMeters: number;
  //   monthlyRent: number;
  // };
  link: string;
  // location: {
  //   address: string;
  //   city: string;
  // };
  // housingType: string;
  bedrooms: number;
  // landlord: string;
  // images: string[];
}

const Advertisement = ({ title, link, bedrooms }: Ad) => {
  return (
    <Link href={`/advertisement/${title}`}>
      <div className=" bg-white border-solid py-4 px-2 my-8  rounded-md shadow-2xl h-40">
        <h3>{title}</h3>
        <p>Antall soverom: {bedrooms}</p>
      </div>
    </Link>
  );
};

export default Advertisement;
