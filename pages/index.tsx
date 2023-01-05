// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

import axios from "axios";
import { useEffect, useState } from "react";
import AdContainer from "../components/AdContainer";
import Advertisement from "../components/Advertisement";
import Footer from "../components/Footer";
import Header from "../components/Header";

// const inter = Inter({ subsets: ['latin'] })
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

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        setAds(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <div>{ads.length} Pages loaded😎</div>
      {ads.map((list: Page) => (
        <AdContainer ads={list.ads} />
      ))}
      <Footer />
    </>
  );
}
