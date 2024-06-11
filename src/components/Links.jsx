import arrowUp from "../images/icon-arrow-up.svg";
import arrowDown from "../images/icon-arrow-down.svg";
import todoIcon from "../images/icon-todo.svg";
import calIcon from "../images/icon-calendar.svg";
import remIcon from "../images/icon-reminders.svg";
import planIcon from "../images/icon-planning.svg";
import { useState } from "react";

export default function Links() {
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <>      
    <div className="md:flex md:flex-row md:justify-between md:w-full md:items-center">
    <div className="flex flex-col gap-4 md:flex-row md:gap-7">
    <div className="relative float-right">
    <span className="hover:cursor-pointer active:text-almost-black" onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}>Features <img src={`${!isFeaturesOpen ? arrowDown : arrowUp}`} alt="Toggle Features Menu"  className="inline-block ml-2"/></span>
        <div className={`${!isFeaturesOpen ? "hidden" : ""}`}>
          <div className="relative bg-almost-white flex flex-col p-3 gap-2">
            <a href="#"><img src={todoIcon} alt="Todo List Icon" className="w-[16px] inline-block mr-2"/> Todo List</a>
            <a href="#"><img src={calIcon} alt="Calendar Icon" className="w-[16px] inline-block mr-2"/> Calendar</a>
            <a href="#"><img src={remIcon} alt="Reminders Icon" className="w-[16px] inline-block mr-2"/> Reminders</a>
            <a href="#"><img src={planIcon} alt="Planning Icon" className="w-[16px] inline-block mr-2"/> Planning</a>
          </div>
        </div>
      </div>        
      <div className="relative float-right">
      <span className="hover:cursor-pointer active:text-almost-black" onClick={() => setIsCompanyOpen(!isCompanyOpen)}>Company <img src={`${!isCompanyOpen ? arrowDown : arrowUp}`} alt="Toggle Company Menu"  className="inline-block ml-2"/></span>
        <div className={`${!isCompanyOpen ? "hidden" : ""}`}>
          <div className="relative bg-almost-white flex flex-col p-3 gap-2">
            <a href="#" className="hover:cursor-pointer active:text-almost-black">History</a>
            <a href="#" className="hover:cursor-pointer active:text-almost-black">Our Team</a>
            <a href="#" className="hover:cursor-pointer active:text-almost-black">Blog</a>
          </div>
        </div>
      </div> 
        <a href="#" className="hover:cursor-pointer active:text-almost-black">Careers</a>
        <a href="#" className="hover:cursor-pointer active:text-almost-black">About</a>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-7">
            <button className="hover:cursor-pointer active:text-almost-black">
            Login</button>
            <button className="border border-almost-black rounded-xl p-2 hover:cursor-pointer md:px-5 active:text-almost-black">
            Register</button>
        </div>
    </div>
    </>
  )
}