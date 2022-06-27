import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/user/Login'
import Register from './pages/user/Register'
import Homepage from './pages/user/Homepage'
import HomepageLayout from './layouts/homepage';
import LeftSidebarLayout from './layouts/left-sidebar'

import Message from './pages/user/Message'
import Bookmark from './pages/user/Bookmark'
import Profile from './pages/user/Profile'
import Friend from './pages/user/Friend'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/user/login" replace />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        <Route element={<HomepageLayout />}>
          <Route path="/user/homepage" element={<Homepage />} />
          <Route path="/user/bookmark" element={<Bookmark />} />
          <Route path="/user/account" element={<Profile />} />
        </Route>
        <Route element={<LeftSidebarLayout />}>
          <Route path="/user/message" element={<Message />} />
          <Route path="/user/friend" element={<Friend />} />
        </Route>
        <Route path="/user/account" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
