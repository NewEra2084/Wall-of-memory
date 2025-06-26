import { Route, Routes } from "react-router";
import MainPage from "./pages/mainPage";
import SearchPage from "./pages/searchPage";
import Layout from "./pages/layout";
import HeroPage from "./pages/heroPage";
import { useState } from "react";

function App() {
  const [filters, setFilters] = useState({
    isFiltered: false,
    filterName: "",
    searchFrom: "",
    searchTo: "",
    chosenRanks: [],
    chosenWord: ""
  });
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<MainPage heroes={filters} setHeroes={setFilters} />}
        />
        <Route
          path="search"
          element={<SearchPage filterString={setFilters} />}
        />
        <Route path="hero/:id" element={<HeroPage />} />
      </Route>
    </Routes>
  );
}

export default App;
