import { UIButton } from "../ui";
import { medal } from "../media";
import image from "../media/image.png";
import { Link } from "react-router";
function HeroPage() {
  return (
    <>
      <hr className="border-2 border-[#8B8785] mr-20" />
      <div className="flex justify-between pt-11 pr-20">
        <div>
          <h2 className="text-[48px] font-bold">
            Абрамов Александр Степанович
          </h2>
          <div className="italic">
            <h3 className="text-[#792426] text-[32px] font-bold">
              Год рождения
            </h3>
            <h3 className="text-[#792426] text-[32px] font-bold">
              Место рождения
            </h3>
            <h3 className="text-[#792426] text-[32px] font-bold">
              Звание
            </h3>
            <h3 className="text-[#792426] text-[32px] font-bold">
              Призван в армию
            </h3>
            <h3 className="text-[#792426] text-[32px] font-bold">
              Как погиб
            </h3>
            <h3 className="text-[#792426] text-[32px] font-bold">
              Место гибели (захоронение)
            </h3>
            <h3 className="text-[#792426] text-[32px] font-bold">
              Дата гибели
            </h3>
          </div>
          <div className="flex tracking-[2px] text-[#2B2A29] gap-4 mb-4">
            <Link to={"/"}>
            <UIButton variant={"unactive"} className={"w-[428px]"}>
              НА ГЛАВНУЮ
            </UIButton></Link>
            <UIButton variant={"active"} className={"w-[428px]"}>
              <img src={medal} alt="медаль"></img> СЛЕДУЮЩИЙ ГЕРОЙ
            </UIButton>
          </div>
          <p>
            Для стены памяти информация получена от родных, близких и друзей
            героев
          </p>
        </div>
        <img src={image} alt="Фото героя" />
      </div>
    </>
  );
}

export default HeroPage;
