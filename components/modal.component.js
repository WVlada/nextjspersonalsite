import Link from "next/link";
import Carousel from "./carousel.component";
export default function Modal({ activeItem, modalCloseHandler }) {
  console.log(activeItem);
  let items = {
    1: {
      text1: "WATER SPORTS EQUIPMENT RENTAL",
      text2: "Kayak and paddle renting app built for business in Oregon",
      text3: "NextJS and MongoDB",
      text4: "Equipment rental, paying in stripe, discount options",
      text5:
        "Invenotory backend where agents on field can rent, mark equipment damaged or unavailable",
      text6: "Term extension possibility during rental",
      text7: "Complete backend admin/agent managment",
      images: [
        "bg-[url('/images/carouselpaddle1.jpg')]",
        "bg-[url('/images/carouselpaddle2.jpg')]",
        "bg-[url('/images/carouselpaddle3.jpg')]",
        "bg-[url('/images/carouselpaddle4.jpg')]",
        "bg-[url('/images/carouselpaddle5.jpg')]",
      ],
      star: true,
      link: "https://paddle-demo.vercel.app/",
    },
    2: {
      text1: "SERBIAN ECONOMY IN ONE PICTURE",
      text2: "Web scraping personal project",
      text3: "Rails  and PostgreSQL",
      text4:
        "Webscraping Serbias Legal Entity database for several months, after which they implemented 'are you a human protection'",
      text5:
        "Over 100.000 entities, showing all connected legal entities in a graph",
      text6:
        "Identifying groups of entities working together connected through personal ID numbers, names, surnames...",
      text7:
        "One picture showing state of ecenomy, corruption and state controlled economy",
      images: [
        "bg-[url('/images/carouselscraper1.jpg')]",
        "bg-[url('/images/carouselscraper2.jpg')]",
        "bg-[url('/images/carouselscraper3.jpg')]",
        "bg-[url('/images/carouselscraper4.jpg')]",
        "bg-[url('/images/carouselscraper5.jpg')]",
      ],
      star: false,
      link: "",
      bigPicture: "/images/scraperbigpicture.png",
    },
    3: {
      text1: "BOOKKEEPING APP",
      text2: "Finnancial accounting personal project",
      text3: "ExpressJS and MongoDB, and Rails and PostgreSQL",
      text4:
        "Bookkeeping app, with balance sheets, closing accounts, graphs.... ",
      text5: "Exporting of statements in PDF",
      text6:
        "Not available due to Herokus no free dyno policy since novembar 2022",
      text7: "Visualy brutal, built by accountant for accountants",
      images: [
        "bg-[url('/images/carouselbooks1.jpg')]",
        "bg-[url('/images/carouselbooks2.jpg')]",
        "bg-[url('/images/carouselbooks3.jpg')]",
        "bg-[url('/images/carouselbooks4.jpg')]",
        "bg-[url('/images/carouselbooks5.jpg')]",
        "bg-[url('/images/carouselbooks6.jpg')]",
      ],
      star: false,
      link: false,
    },
    4: {
      text1: "CREATIVE NUDGE",
      text2: "Coworker personal project",
      text3: "Rails and PostgreSQL",
      text4:
        "A spiritual guru app that records your thought from email responds",
      text5: "Everyday corespondance",
      text6:
        "With creative questions and smart quotes, guiding user throught life",
      text7: "In construction phase",
      images: [
        "bg-[url('/images/carouselnudge1.jpg')]",
        "bg-[url('/images/carouselnudge2.jpg')]",
      ],
      star: false,
      link: "https://creative-nudge.herokuapp.com/",
    },
  };
  return (
    <div
      className={
        "relative top-0 left-0 h-full w-full justify-center z-50 bg-black bg-opacity-80 p-6 md:p-10 overflow-auto "
      }
    >
      <div className="w-full bg-white opacity-80 min-h-full p-10 md:p-14 rounded-lg flex flex-col ">
        <div className="w-full  text-[#344e6f] ">
          <p className="text-lg lg:text-3xl lg:mt-10">
            {items[activeItem].text1}
          </p>
          <p className="text-sm mt-5 lg:mt-10 lg:text-lg">
            {items[activeItem].text2}
          </p>
          <Carousel item={items[activeItem]} />
        </div>
        <div className="w-full mb-10 md:mb-20 lg:mb-40 text-[#344e6f] grow ">
          <p className="mt-2 md:mt-4">{items[activeItem].text3}</p>
          <p className="mt-6 md:mt-10">{items[activeItem].text4}</p>
          <p className="mt-2 md:mt-4">{items[activeItem].text5}</p>
          <p className="mt-2 md:mt-4">{items[activeItem].text6}</p>
          <p className="mt-2 md:mt-4">{items[activeItem].text7}</p>
          {items[activeItem].bigPicture && (
            <Link href={items[activeItem].bigPicture}><p className="underline cursor-pointer" >check out this picture !!! the great circle is ALSU and state agencies controllled enterprises</p></Link>
          )}
          {
            <p className="mt-4">
              Check it on:{" "}
              {items[activeItem].link ? (
                <a href={items[activeItem].link}>{items[activeItem].link}</a>
              ) : (
                "link not yet available"
              )}
            </p>
          }
        </div>
        <div className="flex flex-col items-center justify-center bottom-0  w-full">
          <button
            className="z-50 font-rubik bg-[#344e6f] text-white rounded p-2 w-full lg:w-3/4"
            type="button"
            onClick={modalCloseHandler}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}
