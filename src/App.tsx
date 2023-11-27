import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main';
import DetailPage from './pages/Detail/Detail';
import IcondbPage from './pages/project/IcondbPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/project' element={<DetailPage />} />
      <Route path='/project/icondb' element={<IcondbPage />} />
    </Routes>
  );
}

export default App;
