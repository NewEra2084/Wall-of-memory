import { useEffect, useState } from "react";
import { getData, ScrollHandler } from "../logic";
import image from "../media/image.png";
import { Link } from "react-router";

export function HeroesPanel({ heroesFilter, sethCount }) {
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(2);
  const [fetching, setFetching] = useState(false);
  const panelWidth = Math.floor(heroes.length / 2);

  useEffect(() => {
    getData(setHeroes, heroesFilter);
  }, [heroesFilter]);
  useEffect(() => sethCount(()=>heroes.length), [heroes]);

  useEffect(() => {
    if (!fetching) {
      return;
    }

    fetch(
      encodeURI(
        `https://book-memory-sections-out.itlabs.top/api/members?page=${page}&itemsPerPage=16${
          heroesFilter.searchFrom ? "&yearStart=" + heroesFilter.searchFrom : ""
        }${heroesFilter.searchTo ? "&yearEnd=" + heroesFilter.searchTo : ""}${
          heroesFilter.chosenRanks[0]
            ? "&ranks=" + heroesFilter.chosenRanks
            : ""
        }${heroesFilter.chosenWord ? "&word=" + heroesFilter.chosenWord : ""}${
          heroesFilter.filterName ? "&name=" + heroesFilter.filterName : ""
        }`
      )
    )
      .then((res) => res.json())
      .then((res) => {
        setHeroes((prev) => [...prev, ...res]);
        setPage((prev) => prev + 1);
      })
      .finally(() => setFetching(false));
  }, [fetching, page, heroesFilter]);

  return heroes.length > 0 ? (
    <div
      className="overflow-x-scroll"
      onScroll={(e) => {
        ScrollHandler(e, setFetching);
      }}
    >
      <div className="h-[570px] flex w-fit">
        <div
          className={`bg-[url(${
            heroes[0]?.image || image
          }) h-[100%] w-[428px] mr-4 flex items-end font-bold text-[28px] text-white italic relative`}
        >
          <div className="bg-linear-to-t from-0% from-[#262421] to-30% to-[rgba(38, 36, 33, 0)] z-10 absolute inset-0"></div>
          <h3 className="pb-6 px-6 z-10">{heroes[0]?.name}</h3>
        </div>
        <div
          className={`grid grid-rows-2 gap-y-4`}
          style={{ gridTemplateColumns: `repeat(${panelWidth}, 250px)` }}
        >
          {heroes.map((item, id) => {
            if (id === 0) return;
            return (
              <Link key={item.id} to={`/hero/${item.id}`}>
                <div
                  className={`bg-[url(${
                    item.image || image
                  }) h-[270px] w-[208px] flex items-end font-bold text-[16px] mr-10 text-white italic relative`}
                >
                  <div className="bg-linear-to-t from-0% from-[#262421] to-30% to-[rgba(38, 36, 33, 0)] z-10 absolute inset-0"></div>
                  <h3 className="pb-3 px-3 z-10">{item.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <p className="text-4xl">Данных не найдено</p>
  );
}
