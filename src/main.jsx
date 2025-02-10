import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import MobileMenu from './components/MobileMenu.jsx';
import MobileHeader from './components/MobileHeader.jsx';
import CreatePage from './pages/CreatePage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import ExplorePage from './pages/ExplorePage.jsx';
import ReelsPage from './pages/ReelsPage.jsx';
import MessagePage from './pages/MessagePage.jsx';
import NotifactitionsPage from './pages/NotifactitionsPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <MobileHeader/>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/notification" element={<NotifactitionsPage/>} />
      <Route path="/messages" element={<MessagePage/>} />
      <Route path="/reels" element={<ReelsPage/>} />
      <Route path="/explore" element={<ExplorePage/>} />
      <Route path="/create" element={<CreatePage/>} />

      </Routes>
      <MobileMenu/>
      </BrowserRouter>
   
  </StrictMode>,
)
