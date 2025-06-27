import logo from "../media/logo.svg";
import {Link} from "react-router"
export function Header({fontsColor}) {  
  return (
    <>
      <div className="flex items-center mb-12">
        <Link to={"/"}>
        <img src={logo} className="mr-12" />
        </Link>
        
        <div className="flex flex-col font-bold leading-14">
          <p className={`text-[64px] ${fontsColor ? fontsColor[0] : ""}`}>Музей Боевой и Трудовой Славы</p>
          <p className={`${fontsColor ? fontsColor[1] : "text-black-accent"} text-[64px]`}>город Александров</p>
        </div>
      </div>
    </>
  );
}
