import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/Main/Main.tsx';

function App(): JSX.Element {
  return (
     <Router>
       <Routes>
         <Route path='/' element={<MainPage/>}/>
       </Routes>
     </Router>
  );
}

export default App;
