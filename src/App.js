import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Intro from "./pages/Intro";

import './App.css';
import * as React from 'react';
import io from 'socket.io-client';
import {useEffect, useState} from 'react';
import {Content, Joinroom} from './components';

const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />}/>
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
