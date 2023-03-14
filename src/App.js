import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./media.css"
import Main from "./components/Main/Main";
import Details from "./components/Details/Details";
import FirstDisplay from "./components/FirstDisplay/FirstDisplay";


const App = () => {
  return (
    <>
 
      <Routes>
        <Route path="/" element={<>     <FirstDisplay /><Main /></> } />
        <Route path="/details/:address/:token" element={<Details/>} />
      </Routes>
    </>
  );
};

export default App;
