import { Route, Routes } from "react-router";
import MainPage from "./pages/mainPage";
import SearchPage from "./pages/searchPage";
import Layout from "./pages/layout";
import HeroPage from "./pages/heroPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero" element={<HeroPage />} />
        </Route>
      </Routes>
  );
}

export default App;
