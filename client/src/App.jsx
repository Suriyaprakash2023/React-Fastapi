import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Index from './components/index';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import Friends from './components/friends/Friends';
import FriendsRequest from './components/friends/FriendRequest';
import Suggestions from './components/friends/Suggestions';
import UserProfile from './components/friends/UserProfile';
function App() {


  return (
    <>

        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/index' element={<Index/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/edit-profile' element={<EditProfile/>}/>
          <Route path='/friends' element={<Friends/>}/>
          <Route path='/suggestions' element={<Suggestions/>}/>
          <Route path='/friend-request' element={<FriendsRequest/>}/>
          <Route path='/user-profile/:id' element={<UserProfile/>}/>
        </Routes>

    </>
  )
}

export default App
