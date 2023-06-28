import React from 'react';
import { BrowserRouter, Route , Routes} from "react-router-dom";
import NavBar from "./NavBar";
import VendingMachine from './VendingMachine';
import Oreos from './Oreos';
import Snickers from './Snickers';
import Twix from './Twix';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route exact path='/' element={<VendingMachine />} />
          <Route exact path='/oreos' element={<Oreos />} />
          <Route exact path='/snickers' element={<Snickers />} />
          <Route exact path='/twix' element={<Twix />} />
      </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
