import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import Homepage from './Routes/Homepage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
