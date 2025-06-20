import closeKeyboard from "../media/Keyboard/closeKeyboard.svg";
export function VirtualKeyboard({isSearching}) {
  return (
    <>
      <div className="bg-white w-[920px] h-[320px] mb-5 rounded-3xl"></div>
      <div onClick={()=>isSearching(false)} className="bg-white w-[88px] h-[56px] rounded-3xl flex items-center justify-center">
        <img src={closeKeyboard} alt="Закрыть" />
      </div>
    </>
  );
}
