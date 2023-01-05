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
          <li
            className=" bg-blue-300 rounded-md shadow-lg px-4 py-2 hover:cursor-pointer"
            onClick={() => setArea("")}
          >
            Alle
          </li>
          <li
            className=" bg-blue-300 rounded-md shadow-lg px-4 py-2 hover:cursor-pointer"
            onClick={() => setArea("oslo")}
          >
            Oslo
          </li>
          <li
            className=" bg-blue-300 rounded-md shadow-lg px-4 py-2 hover:cursor-pointer"
            onClick={() => setArea("viken")}
          >
            Viken
          </li>
          <li
            className=" bg-blue-300 rounded-md shadow-lg px-4 py-2 hover:cursor-pointer"
            onClick={() => setArea("bergen")}
          >
            Bergen
          </li>
          <li
            className=" bg-blue-300 rounded-md shadow-lg px-4 py-2 hover:cursor-pointer"
            onClick={() => setArea("trondheim")}
          >
            Trondheim
          </li>
        </ul>
        {/* <div className=" text-right px-4 py-2">{ads.length} Pages loaded😎</div> */}
        {ads.map((list: Page) => (
          <AdContainer ads={list.ads} />
        ))}
        <Footer />
      </main>
    </div>
  );
}
