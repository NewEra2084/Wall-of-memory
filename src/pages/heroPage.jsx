import { UIButton } from "../ui";
import { medal } from "../media";
import image from "../media/image.png";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getHero } from "../logic/connections";

function HeroPage() {
  const { id } = useParams(); // получение данных из строки поиска
  const [heroData, setHeroData] = useState({});
  useEffect(() => {
    getHero(`${id}`, setHeroData);
  }, [id]);
  return (
    <>
      <hr className="border-2 border-[#8B8785] mr-20" />
      <div className="flex justify-between pt-11 pr-20">
        <div>
          <h2 className="text-[48px] font-bold mb-10">
            {heroData.name || "Неизвестно"}
          </h2>
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-[72px]">
              <div>
                <h3 className="text-[#792426] text-[32px] font-bold italic">
                  Год рождения
                </h3>
                <h5 className="text-[24px]">
                  {heroData.yearStartAt || "Неизвестно"} г.
                </h5>
              </div>
              <div>
                <h3 className="text-[#792426] text-[32px] font-bold italic">
                  Место рождения
                </h3>
                <h5 className="text-[24px]">{heroData.city || "Неизвестно"}</h5>
              </div>
            </div>
            <div className="flex gap-[72px]">
              <div>
                <h3 className="text-[#792426] text-[32px] font-bold italic">
                  Звание
                </h3>
                <h5 className="text-[24px]">
                  {heroData.ranks || "Неизвестно"}
                </h5>
              </div>
              <div>
                <h3 className="text-[#792426] text-[32px] font-bold italic">
                  Призван в армию
                </h3>
                <h5 className="text-[24px]">
                  {heroData.calledUponDate || "Неизвестно"}
                </h5>
              </div>
              <div>
                <h3 className="text-[#792426] text-[32px] font-bold italic">
                  Как погиб
                </h3>
                <h5 className="text-[24px]">
                  {heroData.howDie || "Неизвестно"}
                </h5>
              </div>
            </div>
            <div className="flex gap-[72px]">
              <div>
                <h3 className="text-[#792426] text-[32px] font-bold italic">
                  Место гибели (захоронение)
                </h3>
                <h5 className="text-[24px]">
                  {heroData.placeDeath || "Неизвестно"}
                </h5></div><div>
                <h3 className="text-[#792426] text-[32px] font-bold italic">
                  Дата гибели
                </h3>
                <h5 className="text-[24px]">
                  {heroData.monthDeath} {heroData.yearEndAt || "Неизвестно"}
                </h5>
              </div>
            </div>
          </div>
          <div className="flex tracking-[2px] text-[#2B2A29] gap-4 mb-4 mt-[100px]">
            <Link to={"/"}>
              <UIButton variant={"unactive"} className={"w-[428px]"}>
                НА ГЛАВНУЮ
              </UIButton>
            </Link>
            <Link to={`/hero/${heroData.next}`}>
              <UIButton variant={"active"} className={"w-[428px]"}>
                <img src={medal} alt="медаль"></img> СЛЕДУЮЩИЙ ГЕРОЙ
              </UIButton>
            </Link>
          </div>
          <p>
            Для стены памяти информация получена от родных, близких и друзей
            героев
          </p>
        </div>
        <img src={image} alt="Фото героя" className="w-[428px] h-[571px]" />
      </div>
    </>
  );
}

export default HeroPage;
