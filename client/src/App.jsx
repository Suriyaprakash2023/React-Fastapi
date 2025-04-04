import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Index from './components/index';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/index' element={<Index/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/edit-profile' element={<EditProfile/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
