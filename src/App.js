import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from './MainPage';
import IconDBPage from './IconDBPage';

function App() {
  return (
     <Router>
       <Routes>
         <Route path='/' element={<MainPage/>}/>
         <Route path='/icon-db' element={<IconDBPage/>}/>
       </Routes>
     </Router>
  );
}

export default App;
