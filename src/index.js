import React from 'react';
import ReactDOM from 'react-dom'; // Update this import
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
