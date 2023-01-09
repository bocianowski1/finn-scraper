import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import AdContainer from "../components/AdContainer";
import Link from "next/link";

export default function Home() {
  const [ads, setAds] = useState([]);
  const [area, setArea] = useState("oslo");
  const cities = ["oslo", "viken", "bergen", "trondheim", "stavanger"];
  const [selected, setSelected] = useState("oslo");

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
    <div className=" bg-neutral-100">
      <Head>
        <title>Fake Finn</title>
        <meta name="description" content="Fake Finn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-stone-300">
        <ul className="px-10 pt-36 md:grid grid-flow-row grid-cols-5 gap-4 ">
          {cities.map((city) => (
            <div key={city}>
              {city === selected ? (
                <li
                  className="bg-gradient-to-b from-neutral-200 to-stone-300 shadow-md
              font-medium text-center rounded-xl p-2 my-2
              transition ease-in-out hover:shadow-lg
              hover:cursor-pointer duration-300"
                  onClick={() => {
                    setSelected(city);
                    setArea(city);
                  }}
                >
                  {capitalize(city)}
                </li>
              ) : (
                <li
                  className="bg-gradient-to-b from-neutral-100 to-stone-100 shadow-lg
              font-medium text-center rounded-xl p-2 my-2
              transition ease-in-out hover:shadow-xl hover:-translate-y-1 
              hover:cursor-pointer duration-300"
                  onClick={() => {
                    setSelected(city);
                    setArea(city);
                  }}
                >
                  {capitalize(city)}
                </li>
              )}
            </div>
          ))}
        </ul>
        <AdContainer area={area} ads={ads} />
      </main>
    </div>
  );
}
