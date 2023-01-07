import React, { useState } from "react";
import Advertisement from "./Advertisement";

interface Props {
  ads: Ad[];
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

const AdContainer = ({ ads }: Props) => {
  const [numberOfAds, setNumberOfAds] = useState(12);
  const [pageNumber, setPageNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const nums = [1, 2, 3, 4, 5];
  const maxNumberOfPages = 5;

  const decreasePageNumber = () => {
    if (pageNumber >= 1 && inc >= 0) {
      setPageNumber(pageNumber - 1);
      setInc(inc - numberOfAds);
      setNumberOfAds(12);
    }
  };
  const increasePageNumber = () => {
    if (pageNumber <= maxNumberOfPages) {
      setPageNumber(pageNumber + 1);
      setInc(inc + numberOfAds);
      setNumberOfAds(12);
    }
  };

  const jumpToPageNumber = (number: number) => {
    setPageNumber(number);
    setNumberOfAds(12);
    setInc(numberOfAds * number - numberOfAds);
  };
  return (
    <div className="py-6">
      <div className="flex justify-between px-10 pt-6 md:pt-8 lg:p-12">
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
          <span className="p-2 my-2 w-24"></span>
        )}
        <div className="flex justify-between items-center font-medium">
          {nums.map((num: number) => (
            <div key={num}>
              {num === pageNumber ? (
                <button
                  className="p-1 mx-1 font-bold text-xl lg:text-2xl"
                  onClick={() => {
                    jumpToPageNumber(num);
                  }}
                >
                  {num}
                </button>
              ) : (
                <button
                  className="p-1 mx-1 text-xs lg:text-lg"
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
      <div
        className="px-6  
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {ads.slice(inc, numberOfAds + inc).map((ad: Ad) => (
          <Advertisement
            key={ad.id}
            id={ad.id}
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
        {numberOfAds < 30 && (
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
