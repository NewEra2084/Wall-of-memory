import {closeCross} from "../media/";
import { UIButton } from "../ui";
export function Aside({ setIsOpenState }) {
  function closing(e){
    if(!e.target.closest("#aside") || e.target.id === "close"){
      setIsOpenState(false);
    }
  }
  return (
    <div className="bg-black/60 w-[100vw] h-[100%] absolute top-0 left-0 z-60" onClick={(e) => closing(e)}>
      <aside
      className="w-[508px] bg-[url('../media/bgFilters.png')] bg-no-repeat bg-cover h-[100%] animate-asideOpening pl-20 pr-10 py-10"
      id="aside"
    >
      <div className="flex justify-between">
      <h2>ФИЛЬТРЫ</h2>
      <img src={closeCross} alt="Закрыть" id="close"/>
      </div>
      <h3>ДАТА РОЖДЕНИЯ</h3>
      <h3>ЗВАНИЕ</h3>
      <h3>ПО БУКВАМ</h3>
      <UIButton variant={"active"} className={"w-[100%]"}>ПРИМЕНИТЬ</UIButton>
      <UIButton variant={"unactive"} className={"w-[100%]"}>ОЧИСТИТЬ</UIButton>
    </aside>
    </div>
    
  );
}
