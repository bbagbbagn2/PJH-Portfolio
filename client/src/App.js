import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from './MainPage';
import ProfilePage from './ProfilePage';
import ActivityPage from './WorkPage';
import IconDBPage from './IconDBPage';
import ContactPage from './ContactPage/Main';
function App() {
  return (
     <Router>
       <Routes>
         <Route exact path='/' element={<MainPage/>}/>
         <Route exact path='/about' element={<ProfilePage/>}/>
         <Route exact path='/work' element={<ActivityPage/>}/>
         <Route exact path='/IconDB' element={<IconDBPage/>}/>
         <Route exact path='/contact' element={<ContactPage/>}/>
       </Routes>
     </Router>
  );
}

export default App;
