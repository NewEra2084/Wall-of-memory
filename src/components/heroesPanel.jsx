import { useEffect, useState } from "react";
import { getData, getDynamicData } from "../logic/connections";
import { HeroCard } from "./heroCard";
import { ScrollHandler } from "../logic/scrollHandler";

export function HeroesPanel({ heroesFilter, sethCount, scrollHand }) {
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(2); // вторая страница для динамической загрузки
  const [fetching, setFetching] = useState(false); // определяет статус запроса на сервер
  const panelWidth = Math.floor(heroes.length / 2); // расчет колонок для grid

  useEffect(() => {
    getData(setHeroes, heroesFilter);
  }, [heroesFilter]);
  useEffect(() => sethCount(() => heroes.length), [heroes]);

  useEffect(() => {
    if (!fetching) {
      return;
    }
    getDynamicData(page, setHeroes, setPage, heroesFilter).finally(() =>
      setFetching(false)
    );
  }, [fetching, page, heroesFilter]);

  return (
    <div
      className="overflow-x-scroll scrollPanel"
      onScroll={(e) => {
        ScrollHandler(e, setFetching, scrollHand);
      }}
    >
      {heroes.length > 0 ? (
        <div className="h-[570px] flex w-fit">
          <HeroCard
            to={`/hero/${heroes[0].id}`}
            item={heroes[0]}
            variant="big"
          />

          <div
            className={`grid grid-rows-2 gap-y-4`}
            style={{ gridTemplateColumns: `repeat(${panelWidth}, 250px)` }}
          >
            {heroes.map((item, id) => {
              if (id === 0) return;
              return (
                <HeroCard
                  key={item.id}
                  to={`/hero/${item.id}`}
                  item={item}
                  variant="small"
                />
              );
            })}
          </div>
        </div>
      ) : (
        <p className="text-4xl">Данных не найдено</p>
      )}
    </div>
  );
}
