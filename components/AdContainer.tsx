import React from "react";
import Advertisement from "./Advertisement";

interface Page {
  _id: number;
  ads: Ad[];
}

interface Ads {
  ads: Ad[];
}

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

const AdContainer = ({ ads }: Ads) => {
  return (
    // <div className=" bg-gradient-to-tr from-blue-900 to-blue-400 px-6 py-2">
    <div className=" bg-white px-6 py-2">
      {ads.map((ad: Ad) => (
        <Advertisement
          key={ad.title + ad.link + ad.bedrooms}
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
  );
};

export default AdContainer;
