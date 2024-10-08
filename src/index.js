import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Done from './Done';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App component={App} title={"App"} />}></Route>
          <Route path="/list" element={<Done component={Done} title={"List"} />}></Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
