
import { useState } from "react";
import menuIcon from '../images/icon-menu.svg';
import closeMenu from '../images/icon-close-menu.svg';
import Links from "./Links";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <> 
      <div className="relative float-right">
      <img src={menuIcon} alt="Open Menu" className="hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
        <div className={`${!isOpen ? "hidden" : ""} fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,0.5)]`}>
          <div className="fixed bg-almost-white w-3/4 right-0 top-0 h-full flex flex-col p-5">
            <img 
                src={closeMenu} 
                alt="Close Menu" 
                className="w-[32px] mb-7 self-end hover:cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}                    
                />
            <Links />
          </div>
        </div>
      </div>
    </>
  )
}