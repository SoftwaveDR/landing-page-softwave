import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ModuleDetailPage from "./pages/ModuleDetailPage";
import SolutionsPage from "./pages/SolutionsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/soluciones" element={<SolutionsPage />} />
      <Route path="/modulos/:moduleId" element={<ModuleDetailPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
