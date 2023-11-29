import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/Main/Main';
import DetailPage from './pages/Detail/Detail';
import Icondb from './pages/project/icondb';
import Drinkable from './pages/project/drinkable'


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/project' element={<DetailPage />} />
      <Route path='/project/icondb' element={<Icondb />} />
      <Route path='/project/drinkable' element={<Drinkable />} />
    </Routes>
  );
}
