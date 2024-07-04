import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './component/Main';
import Menu_opti from './component/MenuOpti';
import VisualData from './component/VisualData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menuOpti" element={<Menu_opti />} />
        <Route path="/visualdata/:id" element={<VisualData />} />
      </Routes>
    </Router>
  );
}

export default App;