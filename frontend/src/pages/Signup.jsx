import image_main from '../style/ressources/entreprise.webp'
import {useNavigate} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useState} from "react";
import {postUser} from "../Utils/apiCalls";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        postUser({ firstName, lastName, password, email }).then(function () {
            navigate('/homepage');
        });
    };

    return (
<main>
    <div>
        <img src={image_main} className='main__img col-12' alt='Image flou en entreprise'></img>
    </div>
    <form className="col-8 d-flex m-auto rounded-3 main__connexion row center-block p-5">
        <h2 className="text-center">S'inscrire</h2>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Nom</label>
            <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Dupont" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Prénom</label>
            <input type="password" placeholder="Jean" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
            <input type="password" placeholder="jeandupont@gmail.com" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Confirmation d'email</label>
            <input type="password" placeholder="jeandupont@gmail.com" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
            <input type="password" placeholder="6 caractères minimum dont une lettre et un nombre" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Confirmation mot de passe</label>
            <input type="password" placeholder="6 caractères minimum dont une lettre et un nombre" className="form-control" id="exampleInputPassword1"/>
        </div>
        <input type="submit" onClick={submit} className="d-flex justify-content-center w-50 m-auto connexion__button"/>Inscription
    </form>
</main>
    );
  }
  
  export default Signup;