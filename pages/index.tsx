import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import AdContainer from "../components/AdContainer";
import Advertisement from "../components/Advertisement";

interface Page {
  _id: number;
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

export default function Home() {
  const [ads, setAds] = useState([]);
  const [area, setArea] = useState("");
  const cities = ["alle", "oslo", "viken", "bergen", "trondheim"];

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/${area}`)
      .then((res) => {
        setAds(res.data.result);
      })
      .catch((err) => console.log(err));
  }, [area]);

  return (
    <div className=" bg-white">
      <Head>
        <title>Fake Finn</title>
        <meta name="description" content="Fake Finn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100">
        <div className="px-10 font-medium text-xl pt-36 pb-4">
          {area.length === 0 ? (
            <h3>Resultater for hele Norge:</h3>
          ) : (
            <h3>Resultater for {capitalize(area)}:</h3>
          )}
        </div>
        <ul className="px-10 md:grid grid-flow-row grid-cols-5 gap-4 ">
          {cities.map((city) => (
            <li
              key={city}
              className="bg-gradient-to-b from-slate-100 to-zinc-200 shadow-lg
              font-medium text-center rounded-xl p-2 my-2
              transition ease-in-out hover:shadow-xl hover:-translate-y-1 
              hover:cursor-pointer duration-300"
              onClick={() => {
                if (city === "alle") city = "";
                setArea(city);
              }}
            >
              {capitalize(city)}
            </li>
          ))}
        </ul>
        <AdContainer ads={ads} />
      </main>
    </div>
  );
}
