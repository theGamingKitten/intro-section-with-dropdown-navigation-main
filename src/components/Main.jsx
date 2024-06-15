import heroImageMobile from "../images/image-hero-mobile.png";
import heroImageDesktop from "../images/image-hero-desktop.png";
import databizIcon from "../images/client-databiz.svg";
import audioIcon from "../images/client-audiophile.svg";
import meetIcon from "../images/client-meet.svg";
import makerIcon from "../images/client-maker.svg";
import { useMediaQuery } from "react-responsive";

export default function Main() {
  const isMobile = useMediaQuery({
    query: '(max-width: 426px)'
  }) 
  return (
    <>
    <main className="flex flex-col justify-center md:flex-row md:p-10 md:mx-20">
    <div className="md:w-1/2">
      <img src={`${isMobile ? heroImageMobile : heroImageDesktop}`} 
      alt="Hero Image" className="md:max-w-[500px] md:m-auto"/>
    </div>
      <div className="flex flex-col gap-4 my-5 items-center h-auto md:w-1/2 md:-order-1 md:items-start md:justify-between md:mr-28">
        <h1 className="text-almost-black text-4xl font-extrabold mt-3 md:text-7xl md:mb-7 md:mt-28">
        Make <span className="md:block">remote work</span></h1>

        <p className="text-medium-gray leading-7 text-base p-4 text-center md:text-left md:p-0 md:w-4/5">
          Get your team in sync, no matter your location. Streamline processes, create team
          rituals, and watch productivity soar.</p>

      <button className="w-[150px] bg-almost-black border border-almost-black text-almost-white p-3 rounded-xl hover:cursor-pointer active:bg-almost-white active:text-almost-black md:self-start md:my-6">
        Learn more
      </button>
      
        <div className="flex flex-row justify-between w-full items-center mt-10 px-4 md:self-end">
          <img src={databizIcon} alt="client databiz"/>
          <img src={audioIcon} alt="client audiophile"/>
          <img src={meetIcon} alt="client meet"/>
          <img src={makerIcon} alt="client maker"/>
        </div>
      </div>
    </main>
    </>
  )
}