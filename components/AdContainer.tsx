import React, { useEffect, useState } from "react";
import Advertisement from "./Advertisement";

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

const AdContainer = ({ area, ads }: Props) => {
  const defaultNumberOfAds = 12;
  const maxAds = 24;
  const [numberOfAds, setNumberOfAds] = useState(defaultNumberOfAds);
  const [pageNumber, setPageNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const nums = [1, 2, 3, 4, 5];
  const maxNumberOfPages = 5;
  // const [subset, setSubset] = useState(ads.slice(0, defaultNumberOfAds))

  useEffect(() => {
    setPageNumber(1);
    setInc(0);
    setNumberOfAds(defaultNumberOfAds);
  }, [area]);

  const decreasePageNumber = () => {
    if (pageNumber >= 1 && inc >= 0) {
      setPageNumber(pageNumber - 1);
      setInc(inc - defaultNumberOfAds);
      setNumberOfAds(defaultNumberOfAds);
    }
  };
  const increasePageNumber = () => {
    if (pageNumber <= maxNumberOfPages) {
      setPageNumber(pageNumber + 1);
      setInc(inc + defaultNumberOfAds);
      setNumberOfAds(defaultNumberOfAds);
    }
  };

  const jumpToPageNumber = (number: number) => {
    setPageNumber(number);
    setNumberOfAds(defaultNumberOfAds);
    setInc(defaultNumberOfAds * number - defaultNumberOfAds);
  };

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="pt-2">
      <div className="flex justify-between px-10 p-6 md:pt-8 lg:pt-12">
        {pageNumber > 1 ? (
          <button
            className="bg-gradient-to-b from-neutral-100 to-stone-100 shadow-lg
            font-medium text-center rounded-xl p-2 my-2 w-24
            transition ease-in-out hover:shadow-xl
            hover:cursor-pointer duration-300
            "
            onClick={() => decreasePageNumber()}
          >
            Forrige
          </button>
        ) : (
          <div className="p-2 my-2 w-24" />
        )}
        <div className="flex justify-between items-center font-medium">
          {nums.map((num: number) => (
            <div key={num}>
              {num === pageNumber ? (
                <button
                  className="p-1 mx-1 font-bold text-xl lg:text-2xl md:mx-2 lg:mx-6
                  transition ease-in-out hover:font-extrabold
                  hover:cursor-pointer duration-300"
                  onClick={() => {
                    jumpToPageNumber(num);
                  }}
                >
                  {num}
                </button>
              ) : (
                <button
                  className="p-1 mx-1 text-xs lg:text-lg md:mx-2 lg:mx-6
                  transition ease-in-out hover:font-bold
                  hover:cursor-pointer duration-300"
                  onClick={() => {
                    jumpToPageNumber(num);
                  }}
                >
                  {num}
                </button>
              )}
            </div>
          ))}
        </div>
        {pageNumber < maxNumberOfPages ? (
          <button
            className="bg-gradient-to-b from-neutral-100 to-stone-100 shadow-lg
            font-medium text-center rounded-xl p-2 my-2 w-24
            transition ease-in-out hover:shadow-xl
            hover:cursor-pointer duration-300"
            onClick={() => increasePageNumber()}
          >
            Neste
          </button>
        ) : (
          <span className="p-2 my-2 w-24"></span>
        )}
      </div>
      <div className="px-10 font-medium text-xl pb-4 text-left">
        <h3>Resultater for {capitalize(area)}:</h3>
      </div>
      <div
        className="px-6 
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {ads.slice(inc, numberOfAds + inc).map((ad: Ad) => (
          <Advertisement
            key={ad.id}
            id={ad.id}
            area={area}
            title={ad.title}
            features={ad.features}
            link={ad.link}
            location={ad.location}
            housingType={ad.housingType}
            bedrooms={ad.bedrooms}
            landlord={ad.landlord}
            images={ad.images}
          />
        ))}
      </div>
      <div className="flex justify-center">
        {numberOfAds < maxAds && inc < ads.length && (
          <button
            className="bg-gradient-to-b from-neutral-100 to-stone-100 shadow-lg
            font-medium text-center rounded-xl p-2 my-2 w-24
            transition ease-in-out hover:shadow-xl
            hover:cursor-pointer duration-300"
            onClick={() => setNumberOfAds(numberOfAds + 6)}
          >
            Vis mer
          </button>
        )}
      </div>
    </div>
  );
};

export default AdContainer;
