import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import MainPage from './pages/Main/Main';
import DetailPage from './pages/Detail/Detail';
import IcondbPage from './pages/IcondbPage';

function ProjectRouter() {
  const { subpath } = useParams();

  return (
    <Routes>
      <Route index element={<DetailPage />} />
      <Route path='icondb' element={<IcondbPage />} />
    </Routes>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/project/*' element={<ProjectRouter />} />
    </Routes>
  );
}

export default App;
