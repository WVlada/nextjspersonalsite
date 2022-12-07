import { useEffect, useState } from "react";
import CoverItemPureCss from "../components/coverItemPureCss.component";
import FourItems from "../components/fourItems.component";
import Header from "../components/header.component";
import Personal from "../components/personal.component";
import Courses from "../components/courses.component";
import Image from "next/image";
import Modal from "../components/modal.component";
import { AnimatePresence, motion } from 'framer-motion'
export default function Home() {
  //let backGrounds = [1, 2, 3];
  //const [active, setActive] = useState(0);
  //
  //setTimeout(() => {
  //  if (active == 0) {
  //    setActive(1);
  //  }
  //  if (active == 1) {
  //    setActive(2);
  //  }
  //  if (active == 2) {
  //    setActive(0);
  //  }
  //}, 10000);

  const [activeItem, setActiveItem] = useState(null)

  const toggleModal = () => {
    setActiveItem(null)
  }
  const setItem = (item) => {
    console.log(item)
    setActiveItem(item)
  }

  return (
    <div className="flex flex-col min-h-screen  p-1">
      <Header />
      <CoverItemPureCss />

      <FourItems toggleModal={toggleModal} setItem={setItem} />
      <AnimatePresence>
        {activeItem &&
          <motion.div key={activeItem} className={"fixed top-0 left-0 h-full w-full flex justify-center items-center z-50 "} initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ ease: "easeOut", duration: 1 }}>
            <Modal activeItem={activeItem} modalCloseHandler={toggleModal} />
          </motion.div>
        }
      </AnimatePresence>


      <Personal />

      {/*<Courses />*/}-

      <footer className="bottom-0 h-14 nd:h-20 flex items-center bg-[#274162] w-full mt-8 rounded-b-md">
        <div className="flex flex-row justify-center items-center bg-[#274162] w-full">
          <a
            className="mx-8"
            href="https://github.com/WVlada"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/github.png"
              width={40}
              height={40}
              alt="github"
            />
          </a>
          <a
            className="mx-8"
            href="https://linkedin.com/in/vladimirbukvic"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/linkedin.png" width="40" />
          </a>
          <a
            className="mx-8"
            href="https://www.facebook.com/vlada.bukvic/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/facebook.png" width="40" />
          </a>
          <a
            className="mx-8"
            href="https://www.instagram.com/vladimirbukvicc/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/instagram.png" width="40" />
          </a>
        </div>
      </footer>
    </div>
  );
}
