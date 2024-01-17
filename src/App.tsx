import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import MainPage from './pages/Main/Main';
import DetailPage from './pages/Detail/Detail';
import Icondb from './pages/project/icon';
import Drinkable from './pages/project/drinkable';

function ProjectRouter() {
  const { subpath } = useParams();

  return (
    <Routes>
      <Route index element={<DetailPage />} />
      <Route path='/icondb' element={<Icondb />} />
      <Route path='/drinkable' element={<Drinkable />} />
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