import closeKeyboard from "../media/Keyboard/closeKeyboard.svg";
import next from "../media/Keyboard/next.svg";
import previous from "../media/Keyboard/previous.svg";

export function VirtualKeyboard({ isSearching, className = "" }) {
  return (
    <div className={`${className} flex flex-col items-center`}>
      <div
        className="bg-white w-[920px] h-[320px] mb-5 rounded-3xl p-6"
        id="keyboard"
      >
        <div className="flex justify-between">

        <button><img src={previous} alt="Назад" className="inline"/> Предыдущее поле</button>
        <button>Следующее поле <img src={next} alt="Назад" className="inline"/></button>
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
