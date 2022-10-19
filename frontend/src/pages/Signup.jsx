import image_main from '../style/ressources/entreprise.webp'
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {addUser} from '../api/apiCalls'
import { useState, useRef } from 'react';

function Signup() {
    const [name, setName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const navigate = useNavigate()
    const emailValidation = useRef()
    const passwordValidation = useRef()

    const validateForm = () => {
        let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/;
        let regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/

        if(regexEmail.test(email) === false || !email){
            alert( `Votre adresse email n'est pas valide `)
            return false
        }
        if(regexPassword.test(password) === false || !password){
            alert(`Votre mot de passe doit contenir entre 8 et 15 charactères dont un chiffre, une majuscule et un caractère spécial`)
            return false
        }
        if(!name){
            alert('Nom invalide')
            return false
        }
        if(!firstName){
            alert('Prénom invalide')
            return false
        }
        else{
            return true
        }
        
    }
   
    const onClickHandler = () => {
        if(!validateForm()){
            return
        }
        addUser({name, firstName, email, password})
            .then(function(){
                navigate('/signin')
            })
    }
    return (
<main>
    <div>
        <img src={image_main} className='main__img col-12' alt='Image flou en entreprise'></img>
    </div>
    <form className="col-8 d-flex m-auto rounded-3 main__connexion row center-block p-5">
        <h2 className="text-center">S'inscrire</h2>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Nom</label>
            <input type="name" placeholder="Dupont" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{
                setName(e.target.value)
            }}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Prénom</label>
            <input type="firstname" placeholder="Jean" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                setFirstName(e.target.value)
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
            <input type="password" placeholder="6 caractères minimum dont une lettre et un nombre" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Confirmation mot de passe</label>
            <input type="password" placeholder="6 caractères minimum dont une lettre et un nombre" className="form-control" id="repeatPassword" onChange={(e)=>{
                setRepeatPassword(e.target.value)
            }}/>
        </div>

        <button type="submit" className="d-flex justify-content-center w-50 m-auto connexion__button" onClick={onClickHandler()}>Inscription</button>
    </form>
</main>
    );
  }
  
  export default Signup;