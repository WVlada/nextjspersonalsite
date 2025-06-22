import { useState } from "react";
import styles from "./coverItemPureCss.module.css";
import { useEffect } from "react";
import Image from "next/image";

export default function CoverItemPureCss() {
  let textArray = [
    "OBRAČUN KAMATE / INTEREST CALCULATOR",
    "WATER SPORTS EQUIPMENT RENTAL",
    "SERBIAN ECONOMY IN ONE PICTURE",
    "CLOUD BOOKKEEPING APP",
  ];
  let [current, setCurrent] = useState(0);
  let [showArrow, setShowArrow] = useState(true);
  let [textArrayNum, setTextArrayNum] = useState(0);
  let ani = [
    styles.backgroung_opacity_change0,
    styles.backgroung_opacity_change1,
    styles.backgroung_opacity_change2,
    styles.backgroung_opacity_change3,
  ];
  let mani = [
    styles.mbackgroung_opacity_change0,
    styles.mbackgroung_opacity_change1,
    styles.mbackgroung_opacity_change2,
    styles.mbackgroung_opacity_change3,
  ];
  const [animation, setAnimation] = useState(mani);
  useEffect(() => {
    window.innerWidth;
    if (window.innerWidth > 768) {
      setAnimation(ani);
    } else {
      setAnimation(mani);
    }
  }, []);
  setTimeout(() => {
    if (current == 0) {
      setCurrent(1);
      setTextArrayNum(1);
    }
    if (current == 1) {
      setCurrent(2);
      setTextArrayNum(2);
    }
    if (current == 2) {
      setCurrent(3);
      setTextArrayNum(3);
    }
    if (current == 3) {
      setCurrent(0);
      setTextArrayNum(0);
    }
  }, 5000);
  setTimeout(() => {
    setShowArrow(!showArrow);
  }, 10000);
  const handleArrowClick = () => {
    document.querySelector("#anchor-projects").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div
      className={
        "min-h-screen bg-fixed bg-center items-center flex flex-col justify-center rounded-t-lg  " +
        animation[current]
      }
    >
      <div className="grow">
        {// doeas preloading css classes help?
        mani.map((man) => {
          return <Image
            priority
            src={'/images/mhome_cover11.jpg'}
            className={man}
            alt="preload test"
            width={0}
            key={man}
            height={0}
          ></Image>;
        })}
        {// preload wide screen also who cares
        ani.map((man,index) => {
          return <Image
            priority
            src={'/images/mhome_cover11.jpg'}
            className={man}
            alt="preload test"
            width={0}
            key={index}
            height={0}
          ></Image>;
        })}
      </div>
      <div className="text-3xl md:text-[70px] font-thin text-center leading-none">
        {textArray.map((text, index) => {
          return index == textArrayNum ? (
            <p
              key={index}
              className={styles.coveritemText + " font-rubik  mx-10 mt-[50px] "}
            >
              {text}
            </p>
          ) : (
            ""
          );
        })}
      </div>
      <div className="grow"></div>
      {showArrow && (
        <div
          onClick={handleArrowClick}
          className="absolute bottom-4 cursor-pointer animate-bounce bg-[#344e6f] p-2 w-14 h-14 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center mb-4"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      )}
    </div>
  );
}
