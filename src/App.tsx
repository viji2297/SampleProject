import React from 'react';
import './App.css';
import { Main } from './Components/Main.tsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Main />
      {/* <Routes>
        <Router>
          <Route path='/whyHexnode' element={<Layout_Three />} />
        </Router>
      </Routes> */}
    </div>
  );
}

export default App;
