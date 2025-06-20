import { ScrollHandler } from "../logic";

export function HeroesPanel() {
  return (
    <div className="overflow-x-scroll" onScroll={(e) => ScrollHandler(e)}>
      <div className="bg-none w-[2500px] h-[500px]"></div>
    </div>
  );
}
