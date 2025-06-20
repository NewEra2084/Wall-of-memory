import { Link } from "react-router";
import { UIButton } from "../ui";
import { useState } from "react";
import { VirtualKeyboard } from "../components";

function SearchPage() {
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState("");
  return (
    <div className={`flex flex-col items-center ${isSearching ? "pt-[70px]" : "pt-[150px]"}`}>
      <form className={`text-white ${isSearching ? "mb-[70px]" : "mb-[250px]"}`}>
        <h1 className="text-[40px] tracking-[5px] mb-[64px] text-center">
          ПОИСК ПО БАЗЕ ГЕРОЕВ
        </h1>
        <input
          type="text"
          onClick={()=> setIsSearching(true)}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="bg-none border-b-2 text-[32px] border-b-[#C1A886] italic placeholder:text-white focus:outline-0 w-[872px] py-4 px-8 relative text-white after:"
          placeholder="Кого вы ищите?"
        ></input>
      </form>
      {isSearching ? (
        <VirtualKeyboard isSearching={setIsSearching}></VirtualKeyboard>
      ) : (
        <Link to="/">
          <UIButton
            variant={"unactive"}
            className={"w-[576px] border-white text-white"}
          >
            НА ГЛАВНУЮ
          </UIButton>
        </Link>
      )}
    </div>
  );
}

export default SearchPage;
