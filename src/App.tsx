import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main.tsx';
import DetailPage from './pages/Detail/Detail.tsx';
import IcondbPage from './pages/IcondbPage.tsx';


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/work' element={<DetailPage />} />
      <Route path='/work/icondb' element={<IcondbPage />} />
    </Routes>
  );
}

export default App;
