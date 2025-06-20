import { useState } from "react";
import { Aside, HeroesPanel, InfoPanel } from "../components";

function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-r from-[#E4D4B8]/10 from-90% to-[#E4D4B8] z-50 pointer-events-none"></div>
      <InfoPanel setIsOpenState={setIsOpen}></InfoPanel>
      <HeroesPanel></HeroesPanel>
      </div>
      {isOpen ? <Aside setIsOpenState={setIsOpen}></Aside> : ""}
    </>
  );
}

export default MainPage;
