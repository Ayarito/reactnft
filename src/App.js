import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./media.css"
import Main from "./components/Main/Main";
import Details from "./components/Details/Details";
import FirstDisplay from "./components/FirstDisplay/FirstDisplay";
import About from "./components/About/About";


const App = () => {
  return (
    <>
 
      <Routes>
        <Route path="/" element={<><FirstDisplay/> <About/> <Main /></> } />
        <Route path="/details/:address/:token" element={<Details/>} />
      </Routes>
    </>
  );
};

export default App;
