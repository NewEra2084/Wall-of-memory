import { Suspense, useState } from "react";
import { Aside, HeroesPanel, InfoPanel } from "../components";

function MainPage({heroes, setHeroes}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hCount, sethCount] = useState(0);  
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-r from-[#E4D4B8]/10 from-90% to-[#E4D4B8] z-50 pointer-events-none"></div>
        <InfoPanel setIsOpenState={setIsOpen} heroesFilter={heroes} setHeroesFilter={setHeroes} heroesCount={hCount}/>
        <Suspense fallback={<h1>Loading</h1>}>
          <HeroesPanel heroesFilter={heroes} sethCount={sethCount}/>
        </Suspense>
      </div>
      {isOpen ? <Aside setIsOpenState={setIsOpen} setMainFilters={setHeroes}></Aside> : ""}
    </>
  );
}

export default MainPage;
