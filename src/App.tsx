import * as React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/Main/Main';
import IcondbPage from './pages/IcondbPage';

function App(): JSX.Element {
  return (
     <Router>
       <Routes>
         <Route path='/' element={<MainPage />}/>
         <Route path='/icondb' element={<IcondbPage />}/>
       </Routes>
     </Router>
  );
}

export default App;
