"use client";
import Nav from "./components/Nav";
import Table from "./components/Table";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="text-center pt-48 flex flex-col gap-y-4  ">
        <h1 className="text-4xl self-center w-fit">
          Competitive spreads for 11,500+ CFDs
        </h1>
        <h5 className="self-center w-[40rem]">
          Spread bet and trade CFDs on thousands of global markets, including
          forex, indices, commodities, and shares.
        </h5>
      </div>
      <Table />
    </main>
  );
}
