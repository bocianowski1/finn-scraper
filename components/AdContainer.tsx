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

const AdContainer = ({ ads }: Ads) => {
  return (
    <div
      className="px-6 py-2 
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {ads.map((ad: Ad) => (
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
  );
};

export default AdContainer;
