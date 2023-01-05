import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import AdContainer from "../components/AdContainer";
import Advertisement from "../components/Advertisement";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

interface Page {
  _id: number;
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
        <title>Finn Scraper</title>
        <meta name="description" content="Finn Scraper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Header />
        <ul className=" flex justify-between p-4">
          {cities.map((city) => (
            <li
              key={city}
              className=" px-4 rounded p-2
              transition ease-in-out bg-blue-300 hover:-translate-y-0.5 
              hover:cursor-pointer hover:bg-blue-400 duration-300"
              onClick={() => {
                if (city === "alle") city = "";
                setArea(city);
              }}
            >
              {capitalize(city)}
            </li>
          ))}
        </ul>
        <div className=" p-2">
          {area.length === 0 ? (
            <h3>Resultater for hele Norge:</h3>
          ) : (
            <h3>Resultater for {capitalize(area)}:</h3>
          )}
        </div>
        {/* <div className=" text-right px-4 py-2">{ads.length} Pages loaded😎</div> */}
        {ads.map((list: Page) => (
          <AdContainer key={list._id} ads={list.ads} />
        ))}
        <Footer />
      </main>
    </div>
  );
}
