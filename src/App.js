import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from './MainPage';
import WorkPage from './WorkPage';
import IconDBPage from './IconDBPage';
import ContactPage from './ContactPage/Main';

function App() {
  return (
     <Router>
       <Routes>
         <Route path='/' element={<MainPage/>}/>
         <Route path='/work' element={<WorkPage/>}/>
         <Route path='/icon-db' element={<IconDBPage/>}/>
         <Route path='/contact' element={<ContactPage/>}/>
       </Routes>
     </Router>
  );
}

export default App;
