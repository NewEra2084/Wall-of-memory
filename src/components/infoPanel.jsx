import { UIButton } from "../ui/";
import { filter, filterActive, move, search } from "../media/";
import { Link } from "react-router";

export function InfoPanel({
  setIsOpenState,
  heroesFilter,
  setHeroesFilter,
  heroesCount,
}) {
  return (
    <div className="flex items-center gap-4 tracking-[2px] mb-10">
      <Link to="search">
        <UIButton variant={"active"}>
          <img src={search} alt="Поиск" />
          ПОИСК ГЕРОЯ
        </UIButton>
      </Link>
      {heroesFilter.filterName == "" ? (
        <UIButton
          variant={heroesFilter.isFiltered ? "active" : "unactive"}
          onClick={() => setIsOpenState(true)}
        >
          <img
            src={heroesFilter.isFiltered ? filterActive : filter}
            alt="Фильтрация"
          />
          {heroesFilter.isFiltered ? "ФИЛЬТР АКТИВЕН" : "ФИЛЬТР"}
        </UIButton>
      ) : (
        ""
      )}

      {heroesFilter.isFiltered || heroesFilter.filterName !== "" ? (
        <UIButton
          variant={"unactive"}
          onClick={() =>
            setHeroesFilter({
              isFiltered: false,
              filterName: "",
              searchFrom: "",
              searchTo: "",
              chosenRanks: [],
              chosenWord: "",
              page: 1
            })
          }
        >
          ОЧИСТИТЬ ВСЁ
        </UIButton>
      ) : (
        ""
      )}
      <p
        className={`${
          heroesFilter.filterName ? "w-fit" : "w-[390px]"
        } text-[40px] tracking-[5px] text-[#514F4D] text-nowrap`}
      >
        {heroesFilter.filterName != "" ? "РЕЗУЛЬТАТЫ ПОИСКА" : "СТЕНА ПАМЯТИ"}
      </p>
      {heroesFilter.filterName ? (
        <h4 className="bg-[#CF3337] tabular-nums tracking-[4px] text-[40px] px-2 text-white">
          {heroesCount}
        </h4>
      ) : (
        ""
      )}
      <div
        className={`relative h-[50px] w-[100%] bg-[url(../media/vector.png)] bg-repeat-x bg-center`}
      >
        <img
          src={move}
          alt="двигать"
          className="absolute -bottom-1 w-14 h-14 scrollHand"
        ></img>
      </div>
    </div>
  );
}
