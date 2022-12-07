import CarouselLeftArrow from "./carouselleft.arrow.component";
import CarouselRightArrow from "./carouselright.arrow.comnponent";
import { useState } from "react";
import Link from "next/link";
export default function Carousel({ item }) {
    console.log(item)
    const [currentPic, setCurrentPic] = useState(0)
    const [disappear, setDisapear] = useState(" ")
    const handleRightArrowClick = () => {
        setDisapear(' opacity-10 transition duration-500 ease-in-out')
        setTimeout(() => {
            setCurrentPic(currentPic === item.images.length - 1  ? 0 : currentPic + 1)
            setDisapear(' ')
        }, 400)
    }
    const handleLeftArrowClick = () => {
        setDisapear(' opacity-10 transition duration-500 ease-in-out')
        setTimeout(() => {
            setCurrentPic(currentPic === 0 ? item.images.length - 1 : currentPic - 1)
            setDisapear(' ')
        }, 400)
    }
    //let images = { 1: { 1: "bg-[url('/images/carousel/image1.jpg')]", 2: "bg-[url('/images/carousel/image2.jpg')]", 3: "bg-[url('/images/carousel/image3.jpg')]", 4: "bg-[url('/images/carousel/image4.jpg')]" }, 2: { 1: '', 2: '', 3: '', 4: '' }, 3: { 1: '', 2: '', 3: '', 4: '' }, 4: { 1: '', 2: '', 3: '', 4: '' } }
    const classname = item.images[currentPic] + " " + disappear
    return (
        <div className={"mt-2 md:mt-14 w-full flex flex-row bg-cover bg-center rounded-lg drop-shadow-lg " + classname}>
            <div onClick={handleLeftArrowClick} className=" basis-1/6 h-40 md:h-80 justify-center lg:h-96 2xl:h-[32rem] flex items-center bg-[#2e435f] bg-opacity-20 cursor-pointer"><CarouselLeftArrow /></div>
            <div className="basis-4/6 "></div>
            <div onClick={handleRightArrowClick} className=" basis-1/6 flex justify-center items-center bg-[#2e435f] bg-opacity-20 cursor-pointer"><CarouselRightArrow /></div>
        </div>
    );
}
