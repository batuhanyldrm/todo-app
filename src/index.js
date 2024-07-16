import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Done from './Done';
import Todo from './Todo';
import Inprogress from './Inprogress';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App component={App} title={"App"} />}></Route>
          <Route path="/done" element={<Done component={Done} title={"Done"} />}></Route>
          <Route exact path="/todo" element={<Todo component={Todo} title={"Todo"} />}></Route>
          <Route exact path="/inProgress" element={<Inprogress component={Inprogress} title={"In Progress"} />}></Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
