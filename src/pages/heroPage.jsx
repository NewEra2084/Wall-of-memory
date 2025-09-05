import { UIButton } from "../ui";
import { medal } from "../media";
import image from "../media/image.png";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getHero } from "../logic/connections";

const HeroInfoPunct = ({ heroData, children }) => {
  return (
    <div>
      {/* название поля */}
      <h3 className="text-red-primary text-[32px] font-bold italic">
        {children}
      </h3>
      {/* отображение данных, если есть, или Неизвестно */}
      <h5 className="text-[24px]">
        {(heroData.data ? heroData.data + " " : "") +
          (heroData.dataTwo ? heroData.dataTwo + " " : "") +
          (heroData.data ? heroData?.postfix || "" : "") || "Неизвестно"}
      </h5>
    </div>
  );
};
const ButtonsBlock = ({ heroData }) => {
  return (
    <>
      <div className="flex tracking-[2px] text-black-accent gap-4 mb-4 mt-[100px]">
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
        Для стены памяти информация получена от родных, близких и друзей героев
      </p>
    </>
  );
};

function HeroPage() {
  const { id } = useParams(); // получение данных из строки поиска
  const [heroData, setHeroData] = useState({});
  useEffect(() => {
    getHero(`${id}`, setHeroData);
  }, [id]);
  return (
    <>
      <hr className="border-2 border-black-third mr-20" />
      <div className="flex justify-between pt-11 pr-20">
        <div>
          <h2 className="text-[48px] font-bold mb-10">
            {heroData.name || "Неизвестно"}
          </h2>
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-[72px]">
              <HeroInfoPunct
                heroData={{ data: heroData.yearStartAt, postfix: "г." }}
              >
                Дата рождения
              </HeroInfoPunct>
              <HeroInfoPunct heroData={{ data: heroData.city }}>
                Место рождения
              </HeroInfoPunct>
            </div>
            <div className="flex gap-[72px]">
              <HeroInfoPunct heroData={{ data: heroData.ranks }}>
                Звание
              </HeroInfoPunct>
              <HeroInfoPunct heroData={{ data: heroData.calledUponDate }}>
                Призван в армию
              </HeroInfoPunct>
              <HeroInfoPunct heroData={{ data: heroData.howDie }}>
                Как погиб
              </HeroInfoPunct>
            </div>
            <div className="flex gap-[72px]">
              <HeroInfoPunct heroData={{ data: heroData.placeDeath }}>
                Место гибели (захоронение)
              </HeroInfoPunct>
              <HeroInfoPunct
                heroData={{
                  data: heroData.monthDeath,
                  dataTwo: heroData.yearEndAt,
                  postfix: "г.",
                }}
              >
                Дата гибели
              </HeroInfoPunct>
            </div>
          </div>
          <ButtonsBlock heroData={heroData} />
        </div>
        <img src={image} alt="Фото героя" className="w-[428px] h-[571px]" />
      </div>
    </>
  );
}

export default HeroPage;
