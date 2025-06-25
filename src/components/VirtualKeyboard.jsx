import { useState } from "react";
import {
  next,
  prev,
  closeKeyboard,
  language,
  deleteB,
  shift,
} from "../media/Keyboard/";
import { UIButton } from "../ui";

const alphabet = {
  ruFirstLine: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
  ruSecondLine: ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
  ruThirdLine: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю"],
  numbersLine: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
};
export function VirtualKeyboard({ isSearching, searchText, className = "" }) {
  const [isCapital, setisCapital] = useState(false);
  const [isNumeric, setisNumeric] = useState(false);
  return (
    <div className={`${className} flex flex-col items-center text-[#2B2A29]`}>
      <div
        className="bg-white w-[920px] h-[320px] mb-5 rounded-3xl p-6"
        id="keyboard"
      >
        <div className="flex justify-between mb-6 text-[#514F4D] font-montserrat text-[18px] font-[500]">
          <button>
            <img src={prev} alt="Назад" className="inline" /> Предыдущее поле
          </button>
          <button>
            Следующее поле <img src={next} alt="Назад" className="inline" />
          </button>
        </div>
        {!isNumeric ? (
          <>
            <div className="flex gap-2 mb-2">
              {alphabet.ruFirstLine.map((word) => (
                <button
                  key={word}
                  type="button"
                  className="text-center p-3 drop-shadow-keyboard bg-white rounded-lg w-[65px] h-[48px] text-[18px] font-montserrat"
                  onClick={() => searchText((prev) => isCapital ? [...prev, word.toUpperCase()].join("") : [...prev, word].join(""))}
                >
                  {isCapital ? word.toUpperCase() : word}
                </button>
              ))}
            </div>
            <div className="flex px-10 gap-2 mb-2">
              {alphabet.ruSecondLine.map((word) => (
                <button
                  key={word}
                  type="button"
                  className="text-center p-3 drop-shadow-keyboard bg-white rounded-lg w-[65px] h-[48px] text-[18px] font-montserrat"
                  onClick={() => searchText((prev) => isCapital ? [...prev, word.toUpperCase()].join("") : [...prev, word].join(""))}
                >
                  {isCapital ? word.toUpperCase() : word}
                </button>
              ))}
            </div>
            <div className="flex gap-2 mb-2">
              <button
                className="drop-shadow-keyboard bg-[#EBEBEB] rounded-lg p-3 text-[18px] flex items-center justify-center text-nowrap box-border tracking-[2px] w-[104px] h-[48px]"
                onClick={() => setisCapital((prev) => !prev)}
              >
                <img src={shift} alt="Заглавные буквы" />
              </button>
              {alphabet.ruThirdLine.map((word) => (
                <button
                  key={word}
                  type="button"
                  className="text-center p-3 drop-shadow-keyboard bg-white rounded-lg w-[65px] h-[48px] text-[18px] font-montserrat"
                  onClick={() => searchText((prev) => isCapital ? [...prev, word.toUpperCase()].join("") : [...prev, word].join(""))}
                >
                  {isCapital ? word.toUpperCase() : word}
                </button>
              ))}
              <button
                className="drop-shadow-keyboard bg-[#EBEBEB] rounded-lg p-3 text-[18px] flex items-center justify-center text-nowrap box-border tracking-[2px] w-[104px] h-[48px]"
                onClick={() => searchText((prev) => prev.slice(0, -1))}
              >
                <img src={deleteB} alt="Удалить букву" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex gap-2 mb-2">
            <button
              className="drop-shadow-keyboard bg-[#EBEBEB] rounded-lg p-3 text-[18px] flex items-center justify-center text-nowrap box-border tracking-[2px] w-[104px] h-[48px]"
              onClick={() => setisCapital((prev) => !prev)} 
            ><img src={shift} alt="Заглавные буквы" /></button>
            {alphabet.numbersLine.map((word) => (
              <button
                key={word}
                type="button"
                className="text-center p-3 drop-shadow-keyboard bg-white rounded-lg w-[65px] h-[48px] text-[18px] font-montserrat"
                onClick={() => searchText((prev) => [...prev, word].join(""))}
              >
                {isCapital ? word.toUpperCase() : word}
              </button>
            ))}
            <button
              className="drop-shadow-keyboard bg-[#EBEBEB] rounded-lg p-3 text-[18px] flex items-center justify-center text-nowrap box-border tracking-[2px] w-[104px] h-[48px]"
              onClick={() => searchText((prev) => prev.slice(0, -1))}
            ><img src={deleteB} alt="Удалить букву" /></button>
          </div>
        )}
        <div className="flex gap-2 font-montserrat">
          <UIButton
            variant="keyboardEvent"
            size={{ width: "[72px]", height: "[48px]" }}
            padding="3"
            className="drop-shadow-keyboard"
            onClick={() => setisNumeric((prev) => !prev)}
          >
            &123
          </UIButton>
          <button
            type="button"
            className="drop-shadow-keyboard bg-[#EBEBEB] rounded-lg p-3 text-[18px] flex items-center justify-center text-nowrap box-border tracking-[2px] w-[72px]"
          >
            <img src={language} alt="" />
          </button>
          <button
            onClick={() => searchText((prev) => [...prev, " "].join(""))}
            className="drop-shadow-keyboard bg-white rounded-lg p-3 text-[18px] flex items-center justify-center text-nowrap box-border tracking-[2px] w-[100%]"
          >
            Пробел
          </button>
          <button
            className="bg-[#CF3337] text-white rounded-lg drop-shadow-keyboard p-3 text-[18px] flex items-center justify-center text-nowrap box-border tracking-[2px] w-[150px] h-[48px]"
            type="submit"
          >
            Ввод
          </button>
        </div>
      </div>
      <div
        onClick={() => isSearching(false)}
        id="keyboardClose"
        className="bg-white w-[88px] h-[56px] rounded-3xl flex items-center justify-center"
      >
        <img src={closeKeyboard} alt="Закрыть" />
      </div>
    </div>
  );
}
