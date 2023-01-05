import Image from "next/image";
import Link from "next/link";
import { BsMegaphone } from "react-icons/bs";
import { FaBed } from "react-icons/fa";

interface Ad {
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
  title,
  features,
  link,
  location,
  housingType,
  bedrooms,
  landlord,
  images,
}: Ad) => {
  return (
    <Link href={`/advertisement/${title}`}>
      <div
        className=" bg-gray-100 flex relative pb-8
      my-8 rounded-md shadow-2xl h-96 w-auto"
      >
        {/* <div className=" overflow-hidden transition-all outline-none sf-ad-outline sf-ad-card rounded-8 mt-24 mx-16 mb-16 sm:mb-24  grid f-grid grid-cols-2"> */}
        <div className="flex justify-around absolute w-full rounded-t-md">
          {images.length > 0 &&
            images.map((image) => (
              <div key={image + Math.random()} className="aspect-auto max-h-40">
                <img
                  src={image}
                  alt="no"
                  className="w-full h-full object-center object-cover rounded-t-md"
                />
              </div>
            ))}
        </div>
        <div className=" bg-red-300 absolute bottom-2 h-52 w-full flex-col">
          <span>
            {landlord} i {location.city}
          </span>
          <h3 className=" mx-2 font-semibold text-lg ">{title}</h3>
          <h4>{location.address}</h4>
          <div className="bg-green-200 flex justify-start">
            <span className="mx-2 font-semibold">
              {features.monthlyRent} kr
            </span>
            <span className="mx-2 font-semibold">
              {features.squareMeters} kvadratmeter
            </span>
          </div>
          <div className=" flex items-center rounded ">
            {bedrooms > 0 && (
              <span className="mx-2 text-center">{bedrooms} soverom</span>
            )}
            <FaBed className="mx-2" />
            <span className="mx-8">{housingType}</span>
          </div>
          {/* <a
            href={link}
            target="_blank"
            className=" flex items-center rounded p-2
          transition ease-in-out bg-blue-300 hover:-translate-y-0.5 
          hover: hover:bg-blue-400 duration-300"
          >
            
            <p className="px-0 text-center ">Se annonsen i Finn.no</p>
          </a> */}
        </div>
      </div>
    </Link>
  );
};

export default Advertisement;
