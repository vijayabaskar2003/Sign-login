
import React from'react';
// import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './app/components/Login.jsx'
import Register from './app/components/Register.jsx'
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
