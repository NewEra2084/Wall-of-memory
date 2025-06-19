import { useState } from "react";
import { Aside, Header, HeroesPanel, InfoPanel } from "./components/";
import "./styles/index.css";

function App() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg w-[100vw] h-[100vh] pl-[80px] py-[80px] box-border">
      <Header />
      <InfoPanel setIsOpenState={setIsOpen}></InfoPanel>
      <HeroesPanel></HeroesPanel>
      {isOpen?<Aside setIsOpenState={setIsOpen}></Aside> : ""}
    </div>
  );
}

export default App;
