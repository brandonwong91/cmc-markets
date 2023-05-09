"use client";
import clsx from "clsx";
import React, { useState } from "react";

const Table = () => {
  // const feedResponse = await fetch(
  //   "https://assets.cmcmarkets.com/json/cmc-test-most-popular-feed.json"
  // );
  // const forexResponse = await fetch(
  //   "https://assets.cmcmarkets.com/json/cmc-test-forex-feed.json"
  // );
  // const forex = await forexResponse.json();
  // const popularFeed = await feedResponse.json();
  // console.log("feed", popularFeed, forex);
  const tabs = [
    { name: "Popular feed", value: "popular", current: false },
    { name: "Forex", value: "forex", current: false },
  ];
  const popular = [
    {
      name: "US 30",
      code: "123",
      spread: 2,
      "1day": {
        price: null,
        movement: 0.02,
      },
    },
    {
      name: "Germany 40",
      code: "234",
      spread: 1,
      "1day": {
        price: null,
        movement: -0.63,
      },
    },
    {
      name: "US NDAQ 100",
      code: "789",
      spread: 2,
      "1day": {
        movement: 0.28,
        price: null,
      },
    },
  ];
  const forex = [
    {
      name: "AUD/USD",
      code: "123",
      spread: 0.7,
      "1day": {
        movement: 0.3,
        price: null,
      },
    },
    {
      name: "EUR/GBP",
      code: "456",
      spread: 1.1,
      "1day": {
        movement: -0.28,
        price: null,
      },
    },
    {
      name: "EUR/USD",
      code: "789",
      spread: 0.7,
      "1day": {
        movement: -0.03,
        price: null,
      },
    },
  ];
  const [selected, setSelected] = useState("popular");
  const [data, setData] = useState(popular);

  return (
    <div className="flex flex-col">
      <div className="self-center pt-10 place-content-start">
        <nav className="flex self-start space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={clsx(
                "border-transparent text-white hover:text-cmc-blue",
                "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium",
                { "text-cmc-blue": tab.value === selected }
              )}
              onClick={() => {
                setSelected(tab.value);
                setData(tab.value === "popular" ? popular : forex);
              }}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="self-center border-t-[1px] border-t-white flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 align-middle sm:px-6 lg:px-8">
            <table className="divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white"
                  >
                    Instruments
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Min Spread
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Day
                  </th>
                  <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                  ></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((item) => (
                  <tr key={item.name} className="text-white">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white w-[160px]">
                      {item.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-center">
                      {item.spread}
                    </td>
                    <td
                      className={clsx("whitespace-nowrap px-3 py-4 text-sm ", {
                        "text-cmc-green": item["1day"].movement > 0,
                        "text-cmc-red": item["1day"].movement < 0,
                      })}
                    >
                      {`${item["1day"].movement}%`}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <button className="button-ghost">Trade</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <span className="self-center">Pricing is indicative.</span>
    </div>
  );
};

export default Table;
