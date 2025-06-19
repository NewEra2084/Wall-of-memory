import logo from "../media/logo.svg";
export function Header() {
  return (
    <>
      <div className="flex items-center mb-12">
        <img src={logo} className="mr-12" />
        <div className="flex flex-col font-bold leading-14">
          <p className="text-[64px]">Музей Боевой и Трудовой Славы</p>
          <p className="text-[#514F4D] text-[64px] ">город Александров</p>
        </div>
      </div>
    </>
  );
}
