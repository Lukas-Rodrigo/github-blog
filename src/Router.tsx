import { Route, Routes } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { RepositoryPage } from "./pages/RepositoryPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/repository" element={<RepositoryPage />} />
    </Routes>
  );
}
