import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';
import Navigation from './components/navbar/navigation';
import './App.css';
import Logo from './components/logo/Quanta_Finance.jpg';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
      <img src={Logo} alt="My Logo" style={{ width: '60%', transform: 'scale(1)' }}/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/navigation" element={<Navigation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;




