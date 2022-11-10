import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BodyMenu from "./pages/BodyMenu";
import Signin from './pages/Login'
import Nav from './pages/Header'
import Signup from './pages/Signup'
import Homepage from './pages/Homepage'
import Profile from './pages/Profile'
import {useEffect, useState} from "react";
import {userAuth} from "./api/apiCalls";
import {UserContext} from "./Utils/userContext";

function App() {
    const [user, setUser] = useState({});


    useEffect(() => {
        userAuth().then((user) => {
            if (user && user["_id"]) {
                setUser(user);
            } else {
                setUser(null);
                localStorage.removeItem('token');

            }
        });
    }, []);

    return (
        <>
            <UserContext.Provider value={[user, setUser]}>
                <Router>
                    <Routes>
                        <Route path='/' element={<Homepage/>}/>
                        <Route path='/signin' element={<Signin/>}/>
                        <Route path='/signup' element={<Signup/>}/>
                        <Route path='/homepage/profile/:id' element={<Profile/>}/>
                    </Routes>
                </Router>
            </UserContext.Provider>
        </>
    );
}


export default App;