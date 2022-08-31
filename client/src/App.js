import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from './MainPage';
import ProfilePage from './ProfilePage';

function App() {
  return (
     <Router>
       <Routes>
         <Route exact path='/home' element={<MainPage/>}/>
         <Route exact path='/about' element={<ProfilePage/>}/>
       </Routes>
     </Router>
  );
}

export default App;
