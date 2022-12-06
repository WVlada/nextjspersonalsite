import Image from "next/image";
import Star from "./star_component";
import Link from "next/link";
import { useState } from "react";

export default function FourItems({ toggleModal, setItem }) {

  let items = [1, 2, 3, 4];
  let pics = {
    1: {
      text: "WATER SPORTS EQUIPMENT RENTAL",
      uri: "bg-[url('/images/11item.jpg')]",
      star: true,
    },
    2: {
      text: "SERBIAN ECONOMY IN ONE PICTURE",
      uri: "bg-[url('/images/22item.jpg')]",
      star: false,
    },
    3: {
      text: "CLOUD BOOKKEEPING APP",
      uri: "bg-[url('/images/00item.jpg')]",
      star: false,
    },
    4: {
      text: "CREATIVE NUDGE EVERY DAY",
      uri: "bg-[url('/images/33item.jpg')]",
      star: false,
    },
  };
  return (
    <div id="anchor-projects" className="grid grid-cols-2 grid-rows-2 overflow-hidden group ">

      {items.map((number) => {
        return (


          <div onClick={() => { setItem(number) }} key={number} className="overflow-hidden relative transition duration-700 ease-in-out hover:scale-95 rounded ">
            {pics[number].star && (
              <Star />
            )}
            <div
              className={
                "cursor-pointer h-[250px] md:h-[400px] flex justify-center bg-center bg-no-repeat bg-cover hover:grayscale-0 hover:opacity-100 grayscale opacity-20  transition duration-700 ease-in-out hover:scale-125 overflow-hidden " +
                pics[number].uri
              }
            >
              <div className="self-center opacity-100 absolute text-center text-xs md:text-xl text-[#203e64] p-2 ">
                <div className="border-4 border-[#203e64] bg-white p-2 ">
                  {pics[number].text}
                </div>
              </div>
            </div>
          </div>

        );
      })}
    </div>


  );
}
