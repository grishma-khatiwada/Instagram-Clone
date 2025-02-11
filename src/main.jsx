import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import MobileMenu from "./components/MobileMenu.jsx";
import MobileHeader from "./components/MobileHeader.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import ReelsPage from "./pages/ReelsPage.jsx";
import MessagePage from "./pages/MessagePage.jsx";
import NotifactitionsPage from "./pages/NotifactitionsPage.jsx";
import LeftSide from "./components/LeftSide.jsx";
import RightSide from "./components/RightSide.jsx";


export function Root() {

  return(

  <StrictMode>
      <MobileHeader />
      {/* {} */}

      <div className="relative flex h-screen p-4">
        <div className="sticky top-0 h-screen w-3/12 lg:w-2/12 hidden sm:block border-r border-gray-300 ">
          <LeftSide />
        </div>

        <div className="overflow-y-auto h-screen w-12/12 sm:w-9/12 lg:6/12">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notification" element={<NotifactitionsPage />} />
            <Route path="/messages" element={<MessagePage />} />
            <Route path="/reels" element={<ReelsPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </div>

        <div className="sticky top-0 h-screen bg-gray-50 w-3/12 lg:w-4/12 hidden lg:block">
          <RightSide />
        </div>
      </div>

      <MobileMenu />
  </StrictMode>
);

}
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);


