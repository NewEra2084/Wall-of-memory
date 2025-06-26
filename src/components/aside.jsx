import { useEffect, useRef, useState } from "react";
import { closeCross } from "../media/";
import { UIButton } from "../ui";
import { getFilters } from "../logic";
import { VirtualKeyboard } from "./VirtualKeyboard";
import { setEndValueCustomSlider, setStartValueCustomSlider } from "../slider";

function closing(e, setState) {
  if (e.target.closest("#keyboard") || e.target.closest("#keyboardClose")) {
    return;
  }
  if (!e.target.closest("#aside") || e.target.id === "close") {
    setState(false);
  }
}

export function Aside({ setIsOpenState, setMainFilters }) {
  const thumbLeft = useRef(null);
  const thumbRight = useRef(null);
  const rangeBetween = useRef(null);

  const [filters, setFilters] = useState(); // запрос к серверу для получения фильтров
  const [search, setSearch] = useState(false);
  const [searchFrom, setSearchFrom] = useState(1870);
  const [searchTo, setSearchTo] = useState(2025);
  const [expand, setExpand] = useState(false);
  const [chosenRanks, setChosenRanks] = useState([]);
  const [chosenWord, setChosenWord] = useState("");

  useEffect(() => {
    getFilters(setFilters);
  }, []);
  useEffect(()=>{
    if(searchTo <= searchFrom - 10) return; 
    setStartValueCustomSlider(
      searchFrom,
      searchTo,
      thumbLeft.current,
      rangeBetween.current,
    )
  },[searchFrom, searchTo])
  useEffect(()=>{
    if(searchTo + 10 <= searchFrom) return; 
    setEndValueCustomSlider(
      searchFrom,
      searchTo,
      thumbRight.current,
      rangeBetween.current,
    );
  },[searchTo, searchFrom])

  function Validate() {
    // * сделать регулярное выражение
    const REGEX = "d";
    if (REGEX === "" || searchFrom >= searchTo) {
      return;
    } else {
      setMainFilters((prev) => ({
        ...prev,
        isFiltered: true,
        searchFrom: searchFrom,
        searchTo: searchTo,
        chosenRanks: chosenRanks.join(","),
        chosenWord: chosenWord,
        page: 1
      }));
      setIsOpenState(false);
    }
  }
  return (
    <div
      className="bg-black/60 w-[100vw] h-[100%] absolute top-0 left-0 z-60"
      onClick={(e) => closing(e, setIsOpenState)}
    >
      <aside
        className="w-[508px] bg-[url('../media/bgFilters.png')] bg-no-repeat bg-cover h-[100%] animate-asideOpening pl-20 pr-10 py-10 text-[24px] text-[#514F4D]"
        id="aside"
      >
        <div className="flex justify-between mb-4">
          <h2 className="text-[40px] tracking-[3px]">ФИЛЬТРЫ</h2>
          <img src={closeCross} alt="Закрыть" id="close" />
        </div>
        <hr className="border-[#8B8785] border" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            Validate();
          }}
        >
          <h3 className="mt-11">ДАТА РОЖДЕНИЯ</h3>
          <div className="wrapper">
            <div className="range-slider">
              <input
                type="range"
                min="1870"
                value={searchFrom}
                max="2024"
                id="Start"
                onInput={(e) => {
                  searchFrom < searchTo-10 ? setSearchFrom(e.target.value) : "";
                }
              }
              />
              <input
                type="range"
                min="1871"
                value={searchTo}
                max="2025"
                id="End"
                onInput={(e) =>{
                  searchFrom < searchTo-10 ? setSearchTo(e.target.value) : "";
                }
                }
              />

              <div className="track-wrapper">
                <div className="track"></div>
                <div className="range-between" ref={rangeBetween}></div>
                <div className="thumb left" ref={thumbLeft}></div>
                <div className="thumb right" ref={thumbRight}></div>
              </div>
            </div>
          </div>
            <div className="flex justify-between">
              <input
                type="text"
                className="w-[184px] h-[53px] p-4 border-[#514F4D] text-[#2B2A29] placeholder:text-inherit border focus:outline-none"
                value={searchFrom}
                onChange={(e) => setSearchFrom(e.target.value)}
                onClick={() => setSearch("From")}
                placeholder="1940"
              />
              <input
                type="text"
                className="w-[184px] h-[53px] p-4 border-[#514F4D] text-[#2B2A29] placeholder:text-inherit border focus:outline-none"
                value={searchTo}
                onChange={(e) => setSearchTo(e.target.value)}
                onClick={() => setSearch("To")}
                placeholder="2025"
              />
            </div>
          <h3 className="mb-4 mt-8">ЗВАНИЕ</h3>
          <ul
            className={`overflow-y-scroll ${
              expand ? "max-h-[170px]" : "max-h-[120px]"
            } `}
          >
            {expand
              ? filters?.rank.map((item) => {
                  return (
                    <label className="flex mb-4" key={item}>
                      <input
                        checked={chosenRanks.includes(item)}
                        type="checkbox"
                        className={`bg-red w-6 h-6 bg-none border-[#8B8785] border mr-4 appearance-none before:bg-[#CF3337] before:absolute checked:before:inset-0 relative after:absolute checked:after:inset-0 after:z-10 after:bg-cover after:bg-no-repeat checkedAfter checked:border-none`}
                        onChange={(e) => {
                          e.target.checked
                            ? setChosenRanks((prev) => [...prev, item])
                            : setChosenRanks((prev) =>
                                prev.filter((rank) => item != rank)
                              );
                        }}
                      />
                      <p className="tracking-[1px] text-[18px]">{item}</p>
                    </label>
                  );
                })
              : filters?.rank.slice(0, 3).map((item) => {
                  return (
                    <label className="flex mb-4 last:mb-0" key={item}>
                      <input
                        type="checkbox"
                        checked={chosenRanks.includes(item)}
                        className={`bg-red w-6 h-6 bg-none border-[#8B8785] border mr-4 appearance-none before:bg-[#CF3337] before:absolute checked:before:inset-0 relative after:absolute checked:after:inset-0 after:z-10 after:bg-cover after:bg-no-repeat checkedAfter checked:border-none`}
                        onChange={(e) => {
                          e.target.checked
                            ? setChosenRanks((prev) => [...prev, item])
                            : setChosenRanks((prev) =>
                                prev.filter((rank) => item != rank)
                              );
                        }}
                      />
                      <p className="tracking-[1px] text-[18px]">{item}</p>
                    </label>
                  );
                })}
          </ul>
          {expand ? null : (
            <p
              className="tracking-[2px] text-[#CF3337] font-bold text-[18px] mt-5"
              onClick={() => {
                setExpand(true);
                setChosenRanks([]);
              }}
            >
              Посмотреть все
            </p>
          )}

          <h3 className="mb-5 mt-8">ПО БУКВАМ</h3>
          <div className="grid grid-cols-7 grid-rows-4 gap-4">
            {filters?.word?.map((item, id) => (
              <UIButton
                padding="2"
                size={{ width: "10", height: "10" }}
                variant={chosenWord === item ? "active" : "unactive"}
                value={item}
                className="p-2"
                key={id}
                onClick={() => {
                  setChosenWord(item);
                }}
              >
                {item}
              </UIButton>
            ))}
          </div>
          <UIButton
            variant={"active"}
            className={"w-[100%] mb-5 mt-11"}
            type="submit"
          >
            ПРИМЕНИТЬ
          </UIButton>
          <UIButton
            variant={"unactive"}
            className={"w-[100%]"}
            onClick={() => {
              setChosenWord("");
              setSearchFrom("");
              setSearchTo("");
              setChosenRanks([]);
              setExpand(false);
            }}
          >
            ОЧИСТИТЬ
          </UIButton>
        </form>
      </aside>
      {search === "From" ? (
        <VirtualKeyboard
          searchText={setSearchFrom}
          isSearching={setSearch}
          className={"absolute bottom-10 right-[276px]"}
        />
      ) : search === "To" ? (
        <VirtualKeyboard
          searchText={setSearchTo}
          isSearching={setSearch}
          className={"absolute bottom-10 right-[276px]"}
        />
      ) : (
        ""
      )}
    </div>
  );
}
