import image_main from '../style/ressources/entreprise.webp'
import {useNavigate} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { addUser } from "../api/apiCalls";
import { useState, useRef } from "react";
import {Link} from 'react-router-dom';
import Nav from "./Header";

function Signup() {
    const [firstname, setFirstname] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const navigate = useNavigate();
    const inputEmailValidation = useRef();
    const inputPasswordValidation = useRef();

    const validateForm = () => {
        let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/;
        let regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;

        if (regexEmail.test(email) === false || regexPassword.test(password) === false) {

            return false;
        }

        if (!name) {
            alert('Nom invalide');
            return false;
        }
        if (!firstname) {
            alert('Prénom invalide');
            return false;
        }
        if (!email) {
            alert('Email invalide');
            return false;
        }
        if (password === "" || password.length < 8) {
            alert('Mot de passe invalide');
            return false;
        }
        if (password !== passwordRepeat) {
            alert('Les mots de passe ne correspondent pas');
            return false;
        }
        return true;
    };

    const onClickHandler = () => {

        if (!validateForm()) {
            alert('Erreur dans le formulaire')
            // return; // TODO : uncomment it
        }

        addUser({ firstname, name, password, email }).then(function () {
            navigate('/signin');
        })
    };
    return (
        <>
            <Nav/>
            <main>
                <div>
                    <img src={image_main} className='main__img col-12' alt='Image flou en entreprise'></img>
                </div>
                <form className="col-8 d-flex m-auto rounded-3 main__connexion row center-block p-5">
                    <h2 className="text-center">S'inscrire</h2>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nom</label>
                        <input type="name" placeholder="Dupont" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{
                            setName(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Prénom</label>
                        <input type="firstname" placeholder="Jean" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                            setFirstname(e.target.value)
                        }}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" placeholder="jeandupont@gmail.com" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                            setEmail(e.target.value)
                        }}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirmation d'email</label>
                        <input type="email" placeholder="jeandupont@gmail.com" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
                        <input type="password" placeholder="8 caractères mini : un caractère special une lettre et un nombre" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirmation mot de passe</label>
                        <input type="password" placeholder="8 caractères mini : un caractère special une lettre et un nombre" className="form-control" id="repeatPassword" onChange={(e)=>{
                            setPasswordRepeat(e.target.value)
                        }}/>
                    </div>
                    <Link to="/signin">
                        <button type="submit" className="d-flex justify-content-center w-50 m-auto connexion__button" onClick={onClickHandler}>Inscription</button>
                    </Link>
                </form>
            </main>
        </>

    );
  }
  
export default Signup;