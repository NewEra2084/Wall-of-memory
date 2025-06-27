import { useEffect, useRef, useState } from "react";
import { closeCross } from "../media/";
import { getFilters } from "../logic/connections";
import { VirtualKeyboard } from "./VirtualKeyboard";
import {
  setEndValueCustomSlider,
  setStartValueCustomSlider,
} from "../logic/sliderHandler";
import {
  ButtonsBlockAside,
  DateFilterBlock,
  RankFilterBlock,
  WordFilterBlock,
} from "../elements/asideElements";

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
  useEffect(() => {
    if (searchTo <= searchFrom - 10) return;
    setStartValueCustomSlider(
      searchFrom,
      searchTo,
      thumbLeft.current,
      rangeBetween.current
    );
  }, [searchFrom, searchTo]);
  useEffect(() => {
    if (searchTo + 10 <= searchFrom) return;
    setEndValueCustomSlider(
      searchFrom,
      searchTo,
      thumbRight.current,
      rangeBetween.current
    );
  }, [searchTo, searchFrom]);

  function Validate() {
    const REGEX = /\D/g;
    if (REGEX.test(searchFrom) || REGEX.test(searchTo) || searchFrom >= searchTo) {
      return;
    } else {
      setMainFilters((prev) => ({
        ...prev,
        isFiltered: true,
        searchFrom: searchFrom,
        searchTo: searchTo,
        chosenRanks: chosenRanks.join(","),
        chosenWord: chosenWord,
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
        className="w-[508px] bg-[url('./public/bgFilters.png')] bg-no-repeat bg-cover h-[100%] animate-asideOpening pl-20 pr-10 py-10 text-[24px] text-black-accent"
        id="aside"
      >
        <div className="flex justify-between mb-4">
          <h2 className="text-[40px] tracking-[3px]">ФИЛЬТРЫ</h2>
          <img src={closeCross} alt="Закрыть" id="close" />
        </div>
        <hr className="border-black-third border" />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            Validate();
          }}
        >
          <DateFilterBlock
            searchFrom={searchFrom}
            searchTo={searchTo}
            setSearch={setSearch}
            setSearchFrom={setSearchFrom}
            setSearchTo={setSearchTo}
            refs={{ rangeBetween, thumbLeft, thumbRight }}
          />
          <RankFilterBlock
            chosenRanks={chosenRanks}
            expand={expand}
            filters={filters}
            setChosenRanks={setChosenRanks}
            setExpand={setExpand}
          />

          <WordFilterBlock
            chosenWord={chosenWord}
            filters={filters}
            setChosenWord={setChosenWord}
          />
          <ButtonsBlockAside
            eventClick={() => {
              setChosenWord("");
              setSearchFrom(1870);
              setSearchTo(2025);
              setChosenRanks([]);
              setExpand(false);
            }}
          />
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
