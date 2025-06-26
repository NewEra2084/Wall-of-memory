import { Link } from "react-router";

export function HeroCard({ item, to, image, variant = "small" }) {
  return variant === "small" ? (
    <Link
      to={to}
      className={`bg-[url(${
        item.image || image
      }) h-[270px] w-[208px] flex items-end font-bold text-[16px] mr-10 text-white italic relative`}
    >
      <div className="bg-linear-to-t from-0% from-[#262421] to-30% to-[rgba(38, 36, 33, 0)] z-10 absolute inset-0"></div>
      <h3 className="pb-3 px-3 z-10">{item.name}</h3>
    </Link>
  ) : (
    <Link
      to={to}
      className={`bg-[url(${
        item?.image || image
      }) h-[100%] w-[428px] mr-4 flex items-end font-bold text-[28px] text-white italic relative`}
    >
      <div className="bg-linear-to-t from-0% from-[#262421] to-30% to-[rgba(38, 36, 33, 0)] z-10 absolute inset-0"></div>
      <h3 className="pb-6 px-6 z-10">{item?.name}</h3>
    </Link>
  );
}
