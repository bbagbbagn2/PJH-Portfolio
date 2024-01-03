import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import MainPage from './pages/Main/Main';
import DetailPage from './pages/Detail/Detail';
import Icondb from './pages/project/icondb';
import Drinkable from './pages/project/drinkable';
import Blocksmith from './pages/project/blocksmith';
import Tounou from './pages/project/tounou';

function ProjectRouter() {
  const { subpath } = useParams();

  return (
    <Routes>
      <Route index element={<DetailPage />} />
      <Route path='/icondb' element={<Icondb />} />
      <Route path='/drinkable' element={<Drinkable />} />
      <Route path='/block-smith-test' element={<Blocksmith />} />
      <Route path='/tounou-test' element={<Tounou />} />
    </Routes>
  );
};


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/project/*' element={<ProjectRouter />} />
    </Routes>
  );
};