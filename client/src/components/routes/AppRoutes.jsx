import { Route, Routes } from "react-router";
import BlogTitlePage from "../../pages/blogTitlePage/Index";
import CommunityPage from "../../pages/communityPage/Index";
import DashboardPage from "../../pages/dashboardPage/Index";
import GenerateImagePage from "../../pages/generateImage/Index";
import HomePage from "../../pages/homePage/Index";
import Layout from "../../pages/Layout";
import RemoveBackgroundPage from "../../pages/removeBackgroundPage/Index";
import RemoveObjectPage from "../../pages/removeObjectPage/Index";
import ReviewResumePage from "../../pages/reviewResumePage/Index";
import WriteArticlePage from "../../pages/writeArticlePage/Index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ai" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="write-article" element={<WriteArticlePage />} />
        <Route path="write-title" element={<BlogTitlePage />} />
        <Route path="generate-image" element={<GenerateImagePage />} />
        <Route path="remove-background" element={<RemoveBackgroundPage />} />
        <Route path="remove-object" element={<RemoveObjectPage />} />
        <Route path="review-resume" element={<ReviewResumePage />} />
        <Route path="community" element={<CommunityPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
