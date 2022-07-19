import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Register from './components/Register';
import Login from './components/Login';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter >
<Routes>
  <Route path='/' element={<App/>} />
  <Route path='/profile' element={<Profile/>} />
  <Route path='/settings' element={<Settings/>} />
  <Route path='/register' element={<Register/>} />
  <Route path='/login' element={<Login/>} />
</Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
