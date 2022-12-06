import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedSvg from "./animatedsvg.component";
export default function Header({}) {
  const handlePersonalScroll = () => {
    document.querySelector("#anchor-projects").scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleCoursesScroll = () => {
    document.querySelector("#anchor-courses").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="top-10 w-full text-center absolute z-10 text-white text-md md:text-lg leading-6 flex items-center justify-between ">
      <div className="flex-col ml-10 sm:ml-20">
        <Link className="" href="/">
          <a className=" sm:inline">
            <AnimatedSvg></AnimatedSvg>
          </a>
        </Link>
      </div>
      <div className="flex-col">
        <div className="hidden sm:inline mr-20">
          {/*<Link className="" href="/">
            <p className="font-rubik uppercase text-center inline ml-12 mb-4 cursor-pointer">
              HOME
            </p>
            </Link>*/}

          <p
            className="font-rubik uppercase text-center inline ml-12 cursor-pointer"
            onClick={handlePersonalScroll}
          >
            PROJECTS
          </p>

          {/*<p
            className="font-rubik uppercase text-center inline ml-12 cursor-pointer"
            onClick={handleCoursesScroll}
          >
            COURSES
          </p>*/}
        </div>
      </div>
    </div>
  );
}
