import React from 'react';
import Main from "./components/Main/Main";
import './App.css'
import {Route, Routes} from "react-router-dom";
import Details from "./components/Details/Details";

const App = () => {



  return (
          <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/details/:address/:token' element={<Details/>}/>
          </Routes>
  );
};

export default App;
