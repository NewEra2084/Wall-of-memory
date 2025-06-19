import { UIButton } from "../ui/";
import {filter, filterActive, move, search} from "../media/";

export function InfoPanel({setIsOpenState, isFiltered=false}) {
  return (
    <div className="flex items-center gap-4 tracking-[2px] mb-10">
      <UIButton variant={"active"}><img src={search} alt="Поиск"/>ПОИСК ГЕРОЯ</UIButton>
      <UIButton variant={isFiltered ? "active" : "unactive"} onClick={()=> setIsOpenState(true)}>
        <img src={isFiltered ? filterActive : filter} alt="Фильтрация" /> 
        {isFiltered ? "ФИЛЬТР АКТИВЕН" : "ФИЛЬТР"}
      </UIButton>
      {
        isFiltered ? <UIButton variant={"unactive"}>ОЧИСТИТЬ ВСЁ</UIButton>: ""
      }
      <p className="text-[40px] text-[#514F4D]">СТЕНА ПАМЯТИ</p>
      <div className="relative h-[50px] w-[550px] bg-amber-100">
        <img src={move} alt="двигать" className="absolute left-0 bottom-0 w-14 h-14"></img>
      </div>
    </div>
  );
}
