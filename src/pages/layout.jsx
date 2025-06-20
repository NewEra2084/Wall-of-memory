import { Outlet } from "react-router";
import { Header } from "../components";
import { useLocation } from "react-router";

function changeColor(location) {
  if (location) {
    return ["text-white", "text-[#D3D3D3]"];
  }
}

function Layout() {
  const Location = useLocation();
  const isOnSearchPage = Location.pathname == "/search";

  return (
    <div
      className={`bg w-[100%] h-[100vh] pl-[80px] py-[80px] box-border -z-30`}
    >
      {isOnSearchPage ? (
        <>
          <div className="absolute top-0 left-0 bg-black/35 h-[100vh] w-[100vw] -z-10"></div>
          <div className="absolute top-0 left-0 bg-linear-to-b from-0% from-black/80 to-10% to-[#323232] h-[100vh] w-[100vw] -z-10"></div>
        </>
      ) : (
        ""
      )}

      <Header fontsColor={changeColor(isOnSearchPage)} />
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
