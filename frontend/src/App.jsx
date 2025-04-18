import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route, Routes} from "react-router-dom"; 
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import ChessGame from "./components/ChessGame";
import About from "./components/About";
import Rules from "./components/Rules";
import HQChessGame from './components/HQChessGame';
import PPChessGame from './components/PPChessGame';
import FBChessGame from './components/FBChessGame';

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chessGame" element={<ChessGame />} />
        <Route path="/hqchessGame" element={<HQChessGame />} />
        <Route path="/ppchessGame" element={<PPChessGame />} />
        <Route path="/fbchessgame" element={<FBChessGame />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="rules" element={<Rules />} /> 
          <Route path="about" element={<About />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App