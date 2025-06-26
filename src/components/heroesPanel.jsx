import { useEffect, useState } from "react";
import { getData, getDynamicData } from "../logic/connections";
import image from "../media/image.png";
import { HeroCard } from "./heroCard";
import { ScrollHandler } from "../logic/scrollHandler";

export function HeroesPanel({ heroesFilter, sethCount, scrollHand }) {
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(2);
  const [fetching, setFetching] = useState(false);
  const panelWidth = Math.floor(heroes.length / 2);

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

  return heroes.length > 0 ? (
    <div
      className="overflow-x-scroll"
      onScroll={(e) => {
        ScrollHandler(e, setFetching, scrollHand);
      }}
    >
      <div className="h-[570px] flex w-fit">
        <HeroCard
          to={`/hero/${heroes[0].id}`}
          item={heroes[0]}
          image={image}
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
                image={image}
                variant="small"
              />
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <p className="text-4xl">Данных не найдено</p>
  );
}
