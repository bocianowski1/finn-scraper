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
    <div className="ads-container">
      {ads.map((ad: Ad) => (
        <Advertisement
          key={ad.title}
          title={ad.title}
          link={ad.link}
          bedrooms={ad.bedrooms}
        />
      ))}
    </div>
  );
};

export default AdContainer;