import { Route, Routes } from "react-router-dom";
import ContentSection from "../layout/ContentSection";
import PokemonPage from "../pages/PokemonPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ContentSection />} />
      <Route path="/:name" element={<PokemonPage />} />
      <Route path="/*" element={<ContentSection />} />
    </Routes>
  );
};

export default Router;
