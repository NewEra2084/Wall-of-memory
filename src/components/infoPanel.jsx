import { UIButton } from "../ui/";
import { filter, filterActive, move, search } from "../media/";
import { Link } from "react-router";

const ButtonsBlock = ({ heroesFilter, setIsOpenState, setHeroesFilter }) => {
  return (
    <>
      <Link to="search">
        <UIButton variant={"active"}>
          <img src={search} alt="Поиск" />
          ПОИСК ГЕРОЯ
        </UIButton>
      </Link>
      {heroesFilter.filterName === "" ? (
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
              page: 1,
            })
          }
        >
          ОЧИСТИТЬ ВСЁ
        </UIButton>
      ) : (
        ""
      )}
    </>
  );
};

export function InfoPanel({
  setIsOpenState,
  heroesFilter,
  setHeroesFilter,
  heroesCount,
  scrollHand,
}) {
  return (
    <div className="flex items-center gap-4 tracking-[2px] mb-10">
      <ButtonsBlock
        heroesFilter={heroesFilter}
        setIsOpenState={setIsOpenState}
        setHeroesFilter={setHeroesFilter}
      />
      {/* Надписи */}
      <h3
        className={`${
          heroesFilter.filterName ? "w-fit" : "w-[390px]"
        } text-[40px] tracking-[5px] text-black-accent text-nowrap`}
      >
        {heroesFilter.filterName != "" ? "РЕЗУЛЬТАТЫ ПОИСКА" : "СТЕНА ПАМЯТИ"}
      </h3>
      {heroesFilter.filterName ? (
        <div className="bg-red-accent tabular-nums tracking-[4px] text-[40px] px-2 text-white">
          {heroesCount}
        </div>
      ) : (
        ""
      )}
      {/* handScroller */}
      <div
        className={`relative h-[50px] w-[100%] bg-[url(./public/vector.png)] bg-repeat-x bg-center`}
      >
        <img
          src={move}
          alt="двигать"
          className="absolute -bottom-1 w-14 h-14 scrollHand"
          ref={scrollHand}
        ></img>
      </div>
    </div>
  );
}
