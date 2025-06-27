import { Link } from "react-router";
import image from "../../public/image.png";

export function HeroCard({ item, to, variant = "small" }) {
  return variant === "small" ? (
    <Link
      to={to}
      className={`h-[270px] w-[208px] flex items-end font-bold text-[16px] mr-10 text-white italic relative`}
    >
      <div className="bg-linear-to-t from-0% from-[#262421] to-30% to-[rgba(38, 36, 33, 0)] z-10 absolute inset-0"></div>
      <img src={item?.image || image} className="z-0 bg-cover bg-no-repeat absolute max-h-[100%] w-[100%] inset-0"></img>
      <h3 className="pb-3 px-3 z-10">{item.name}</h3>
    </Link>
  ) : (
    <Link
      to={to}
      className={`bg-[url(${
        item?.image || image
      }) bg-cover bg-no-repeat h-[100%] w-[428px] mr-4 flex items-end font-bold text-[28px] text-white italic relative`}
    >
      <div className="bg-linear-to-t from-0% from-[#262421] to-30% to-[rgba(38, 36, 33, 0)] z-10 absolute inset-0"></div>
      <img src={item?.image || image} className="z-0 bg-cover bg-no-repeat absolute inset-0"></img>
      <h3 className="pb-6 px-6 z-10">{item?.name}</h3>
    </Link>
  );
}
