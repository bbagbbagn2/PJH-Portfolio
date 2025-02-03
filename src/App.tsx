import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/Main/Main';
import DetailPage from './pages/Detail/Detail';
import ProjectPage from './pages/project/Project';

function ProjectRouter() {
  return (
    <Routes>
      <Route index element={<DetailPage />} />
      <Route path=":id" element={<ProjectPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project/*" element={<ProjectRouter />} />
    </Routes>
  );
}
