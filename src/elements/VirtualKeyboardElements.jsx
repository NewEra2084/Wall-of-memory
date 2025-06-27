import { deleteB, language, shift } from "../media/Keyboard";

const KeyboardButton = ({ searchText, children }) => {
  return (
    <button
      type="button"
      className="text-center p-3 drop-shadow-keyboard bg-white rounded-lg w-[65px] h-[48px] text-[18px] font-montserrat"
      onClick={() =>
        searchText((prev) => [...prev.toString(), children].join(""))
      }
    >
      {children}
    </button>
  );
};

const BaseLine = ({ searchText, isCapital, num }) => {
  return (
    <>
      <div className="flex gap-2 mb-2 justify-center">
        {num.map((word) => (
          <KeyboardButton key={word} searchText={searchText}>
            {isCapital ? word.toUpperCase() : word}
          </KeyboardButton>
        ))}
      </div>
    </>
  );
};

const EventLine = ({ searchText, isCapital, setisCapital, isNumeric, num }) => {
  return (
    <>
      <div className="flex gap-2 mb-2">
        <button
          className="drop-shadow-keyboard bg-[#EBEBEB] rounded-lg p-3 text-[18px] flex items-center justify-center text-nowrap box-border tracking-[2px] w-[104px] h-[48px]"
          onClick={() => {
            setisCapital((prev) => !prev);
          }}
          type="button"
        >
          <img src={shift} alt="Заглавные буквы" />
        </button>
        {num.map((word) => (
          <KeyboardButton key={word} searchText={searchText}>
            {isCapital && !isNumeric
              ? word?.toUpperCase()
              : word}
          </KeyboardButton>
        ))}
        <button
          type="button"
          className="drop-shadow-keyboard bg-[#EBEBEB] rounded-lg p-3 text-[18px] flex items-center justify-center text-nowrap box-border tracking-[2px] w-[104px] h-[48px]"
          onClick={() => searchText((prev) => prev.toString().slice(0, -1))}
        >
          <img src={deleteB} alt="Удалить букву" />
        </button>
      </div>
    </>
  );
};

const SpecialButtons = ({ setisNumeric, searchText }) => {
  return (
    <>
      <div className="flex gap-2 font-montserrat">
        <button
          type="button"
          onClick={() => setisNumeric((prev) => !prev)}
          className="drop-shadow-keyboard bg-[#EBEBEB] rounded-lg p-3 text-[18px] flex items-center justify-center text-nowrap box-border tracking-[2px] w-[72px]"
        >
          &123
        </button>
        <button
          type="button"
          className="drop-shadow-keyboard bg-[#EBEBEB] rounded-lg p-3 text-[18px] flex items-center justify-center text-nowrap box-border tracking-[2px] w-[72px]"
        >
          <img src={language} alt="" />
        </button>
        <button
          type="button"
          onClick={() =>
            searchText((prev) => [...prev.toString(), " "].join(""))
          }
          className="drop-shadow-keyboard bg-white rounded-lg p-3 text-[18px] flex items-center justify-center text-nowrap box-border tracking-[2px] w-[100%]"
        >
          Пробел
        </button>
        <button
          className="bg-red-accent text-white rounded-lg drop-shadow-keyboard p-3 text-[18px] flex items-center justify-center text-nowrap box-border tracking-[2px] w-[150px] h-[48px]"
          type="submit"
        >
          Ввод
        </button>
      </div>
    </>
  );
};

export function VirtualKeyboardElements({
  variant,
  searchText,
  isCapital,
  isNumeric,
  setisCapital,
  num,
  setisNumeric,
}) {
  const Line = {
    baseLine: BaseLine,
    eventLine: EventLine,
    specialButtons: SpecialButtons,
  }[variant];
  return (
    <Line
      searchText={searchText}
      isCapital={isCapital}
      isNumeric={isNumeric}
      num={num}
      setisCapital={setisCapital}
      setisNumeric={setisNumeric}
    />
  );
}
