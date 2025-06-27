import { useState } from "react";
import { next, prev, closeKeyboard } from "../media/Keyboard/";
import { VirtualKeyboardElements } from "../elements/VirtualKeyboardElements";

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
    <div className={`${className} flex flex-col items-center text-black-primary`}>
      <div
        className="bg-white w-[920px] h-[320px] mb-5 rounded-3xl p-6"
        id="keyboard"
      >
        <div className="flex justify-between mb-6 text-black-accent font-montserrat text-[18px] font-[500]">
          <button>
            <img src={prev} alt="Назад" className="inline" /> Предыдущее поле
          </button>
          <button>
            Следующее поле <img src={next} alt="Назад" className="inline" />
          </button>
        </div>
        {!isNumeric ? (
          <>
            <VirtualKeyboardElements
              variant={"baseLine"}
              isCapital={isCapital}
              searchText={searchText}
              num={alphabet.ruFirstLine}
            />
            <VirtualKeyboardElements
              variant={"baseLine"}
              isCapital={isCapital}
              searchText={searchText}
              num={alphabet.ruSecondLine}
            />
            <VirtualKeyboardElements
              variant={"eventLine"}
              isCapital={isCapital}
              isNumeric={isNumeric}
              searchText={searchText}
              num={alphabet.ruThirdLine}
              setisCapital={setisCapital}
            />
          </>
        ) : (
          <VirtualKeyboardElements
            variant={"eventLine"}
            isCapital={isCapital}
            searchText={searchText}
            isNumeric={isNumeric}
            num={alphabet.numbersLine}
            setisCapital={setisCapital}
          />
        )}
        <VirtualKeyboardElements
          variant={"specialButtons"}
          searchText={searchText}
          setisNumeric={setisNumeric}
        />
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
