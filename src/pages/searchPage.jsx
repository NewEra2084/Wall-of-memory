import { Link, useNavigate } from "react-router";
import { UIButton } from "../ui";
import { useState } from "react";
import { VirtualKeyboard } from "../components";

function SearchPage({ filterString }) {
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState("");
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col items-center ${
        isSearching ? "pt-[70px]" : "pt-[150px]"
      }`}
    >
      <form
        className={`text-white`}
        onSubmit={(e) => {
          e.preventDefault();
          filterString((prev) => ({ ...prev, filterName: searchText }));
          navigate("/");
        }}
      >
        <h1 className="text-[40px] tracking-[5px] mb-[64px] text-center">
          ПОИСК ПО БАЗЕ ГЕРОЕВ
        </h1>
        <input
          type="text"
          onClick={() => setIsSearching(true)}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className={`${isSearching ? "mb-[70px]" : "mb-[250px]"} bg-none border-b-2 text-[32px] border-b-[#C1A886] italic placeholder:text-white focus:outline-0 w-[872px] py-4 px-8 relative text-white after:`}
          placeholder="Кого вы ищите?"
        ></input>
      
      {isSearching ? (
        <VirtualKeyboard isSearching={setIsSearching} searchText={setSearchText}></VirtualKeyboard>
      ) : (
        <Link to="/">
          <UIButton
            variant={"unactive"}
            className={"w-[576px] border-white text-white mx-auto"}
          >
            НА ГЛАВНУЮ
          </UIButton>
        </Link>
      )}</form>
    </div>
  );
}

export default SearchPage;
