import { UIButton } from "../ui";

export const ButtonsBlockAside = ({ eventClick }) => {
  return (
    <>
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
        onClick={eventClick}
      >
        ОЧИСТИТЬ
      </UIButton>
    </>
  );
};

export const WordFilterBlock = ({ filters, chosenWord, setChosenWord }) => {
  return (
    <>
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
    </>
  );
};

const RankFilterLine = ({ chosenRanks, item, setChosenRanks }) => {
  return (
    <>
      <label className="flex mb-4 last:mb-0">
        <input
          type="checkbox"
          checked={chosenRanks.includes(item)}
          className={`bg-red w-6 h-6 bg-none border-black-third border mr-4 appearance-none before:bg-red-accent before:absolute checked:before:inset-0 relative after:absolute checked:after:inset-0 after:z-10 after:bg-cover after:bg-no-repeat checkedAfter checked:border-none`}
          onChange={(e) => {
            e.target.checked
              ? setChosenRanks((prev) => [...prev, item])
              : setChosenRanks((prev) => prev.filter((rank) => item != rank));
          }}
        />
        <p className="tracking-[1px] text-[18px]">{item}</p>
      </label>
    </>
  );
};

export const RankFilterBlock = ({
  filters,
  chosenRanks,
  setChosenRanks,
  expand,
  setExpand,
}) => {
  return (
    <>
      <h3 className="mb-4 mt-8">ЗВАНИЕ</h3>
      <ul
        className={`overflow-y-scroll ${
          expand ? "max-h-[170px]" : "max-h-[120px]"
        } `}
      >
        {expand
          ? filters?.rank.map((item) => {
              return (
                <RankFilterLine
                  key={item}
                  item={item}
                  chosenRanks={chosenRanks}
                  setChosenRanks={setChosenRanks}
                />
              );
            })
          : filters?.rank.slice(0, 3).map((item) => {
              return (
                <RankFilterLine
                  key={item}
                  item={item}
                  chosenRanks={chosenRanks}
                  setChosenRanks={setChosenRanks}
                />
              );
            })}
      </ul>
      {expand ? (
        ""
      ) : (
        <p
          className="tracking-[2px] text-red-accent font-bold text-[18px] mt-5"
          onClick={() => {
            setExpand(true);
            setChosenRanks([]);
          }}
        >
          Посмотреть все
        </p>
      )}
    </>
  );
};

export const DateFilterBlock = ({searchFrom, searchTo, setSearchFrom, setSearchTo, setSearch, refs}) => {
  return (
    <>
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
              searchFrom < searchTo - 10 ? setSearchFrom(e.target.value) : "";
            }}
          />
          <input
            type="range"
            min="1871"
            value={searchTo}
            max="2025"
            id="End"
            onInput={(e) => {
              searchFrom < searchTo - 10 ? setSearchTo(e.target.value) : "";
            }}
          />

          <div className="track-wrapper">
            <div className="track"></div>
            <div className="range-between" ref={refs.rangeBetween}></div>
            <div className="thumb left" ref={refs.thumbLeft}></div>
            <div className="thumb right" ref={refs.thumbRight}></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <input
          type="text"
          className="w-[184px] h-[53px] p-4 border-black-accent text-black-primary placeholder:text-inherit border focus:outline-none"
          value={searchFrom}
          onChange={(e) => setSearchFrom(e.target.value)}
          onClick={() => setSearch("From")}
          placeholder="1940"
        />
        <input
          type="text"
          className="w-[184px] h-[53px] p-4 border-black-accent text-black-primary placeholder:text-inherit border focus:outline-none"
          value={searchTo}
          onChange={(e) => setSearchTo(e.target.value)}
          onClick={() => setSearch("To")}
          placeholder="2025"
        />
      </div>
    </>
  );
};