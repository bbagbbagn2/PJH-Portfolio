import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from './MainPage';
import ProfilePage from './ProfilePage';
import ActivityPage from './WorkPage';

function App() {
  return (
     <Router>
       <Routes>
         <Route exact path='/' element={<MainPage/>}/>
         <Route exact path='/about' element={<ProfilePage/>}/>
         <Route exact path='/work' element={<ActivityPage/>}/>
       </Routes>
     </Router>
  );
}

export default App;
