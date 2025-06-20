import { UIButton } from "../ui/";
import { filter, filterActive, move, search } from "../media/";
import { Link } from "react-router";

export function InfoPanel({ setIsOpenState, isFiltered = false }) {
  return (
    <div className="flex items-center gap-4 tracking-[2px] mb-10">
      <Link to="search">
        <UIButton variant={"active"}>
          <img src={search} alt="Поиск" />
          ПОИСК ГЕРОЯ
        </UIButton>
      </Link>
      <UIButton
        variant={isFiltered ? "active" : "unactive"}
        onClick={() => setIsOpenState(true)}
      >
        <img src={isFiltered ? filterActive : filter} alt="Фильтрация" />
        {isFiltered ? "ФИЛЬТР АКТИВЕН" : "ФИЛЬТР"}
      </UIButton>
      {isFiltered ? <UIButton variant={"unactive"}>ОЧИСТИТЬ ВСЁ</UIButton> : ""}
      <p className="min-w-[350px] text-[40px] text-[#514F4D]">{isFiltered ? "РЕЗУЛЬТАТЫ ПОИСКА" : "СТЕНА ПАМЯТИ"}</p>
      {isFiltered ? <h4 className="bg-[#CF3337] tabular-nums tracking-[4px] text-[40px] px-2 text-white">20</h4> : ""}
      <div className={`relative h-[50px] w-[100%] bg-[url(../media/vector.png)] bg-repeat-x bg-center`}>
        <img
          src={move}
          alt="двигать"
          className="absolute -bottom-1 w-14 h-14 scrollHand"
        ></img>
      </div>
    </div>
  );
}
