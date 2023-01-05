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
    <a href={link} target="_blank">
      <div className="ad-container">
        <h3>{title}</h3>
        <p>Antall soverom: {bedrooms}</p>
      </div>
    </a>
  );
};

export default Advertisement;
