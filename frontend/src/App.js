import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BodyMenu from "./pages/BodyMenu";
import Signin from './pages/Login'
import Nav from './pages/Header'
import Signup from './pages/Signup'
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
    <Nav />
    <Router>
      <Routes>
        <Route path='/' element={<BodyMenu/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
      </Routes>
    </Router>
    </>
);
}




export default App;