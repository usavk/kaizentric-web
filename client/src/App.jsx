import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Addvideos from './pages/Addvideos';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import axios from 'axios';
import { Toaster} from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <>
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path='/' element={<Home />} /> {/* Specify the path for the Home route */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/Addvideos' element={<Addvideos />} />
      </Routes>
    </>
  );
}

export default App;
