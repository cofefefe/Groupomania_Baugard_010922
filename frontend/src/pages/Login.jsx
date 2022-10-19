import image_main from '../style/ressources/entreprise.webp'
import style from '../style/style.css'
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState, useRef} from "react";
import {useNavigate} from 'react-router-dom';
import {userLogin} from '../api/apiCalls'
import { useContext} from "react";
import { UserContext } from '../Utils/userContext'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useContext(UserContext);
    const [loginFail, setLoginFail] = useState(false);
    const validateForm = () => {
        if (!email) {
            alert('Email invalide');
            return false;
        }
        if (!password) {
            alert('Mot de passe invalide');
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return
        }
        userLogin({ password, email }).then(function (response) {
            if (response.user && response.user.id > 0 && response.token) {
                localStorage.setItem("token", response.token);
                setUser(response.user);
                navigate('/');
            } else {
                setLoginFail(true)
            }
        })
    };

    return (
<main>
    <div>
        <img src={image_main} className='main__img col-12' alt='Image flou en entreprise'></img>
    </div>
    <form className="col-8 d-flex m-auto rounded-3 main__connexion row center-block p-5" onSubmit={handleSubmit}>
        <h2 className="text-center">Se connecter</h2>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" placeholder="jean.dupont@gmail.com" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" placeholder="6 caractères minimum dont une lettre et un nombre" className="form-control" id="exampleInputPassword1"/>
        </div>
        <Link to="/homepage">
            <button type="submit" className="d-flex justify-content-center  w-50 m-auto connexion__button">Connexion</button>
        </Link>
    </form>
</main>
    );
  }
  
  export default Login;
  