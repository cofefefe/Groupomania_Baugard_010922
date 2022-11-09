import {UserContext} from "../Utils/userContext";
import Nav from "../pages/Header"
import { AiFillPropertySafety } from "react-icons/ai";
import { useState, useContext, useRef } from "react";
import {createPath, useNavigate} from 'react-router-dom';
import { deleteUser, updateUser } from "../api/apiCalls";


function EditProfile(props){
    const [imageUrl, setImageUrl] = useState('')
    const [user] = useContext(UserContext)

    const [firstname, setFirstname] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
    const [newPassword, setNewPassword] = useState("")
    const navigate = useNavigate();
    const inputEmailValidation = useRef();
    const inputPasswordValidation = useRef();
    const [bio, setBio] = useState("")

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImageUrl(img);
            console.log("img", img)
        }
    };
    
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
        if (password !== newPasswordRepeat) {
            alert('Les mots de passe ne correspondent pas');
            return false;
        }
        console.log('form are valid')
        return true;
    };

    const onClickHandler = () => {

        if (!validateForm()) {
            alert('Erreur dans le formulaire')
        }

        updateUser({ firstname, name, password, email, bio, imageUrl }).then(function () {
            navigate('/homepage');
        })
    };

    return(
        <>
        < Nav />
        <h2 className="edit__title mt-5 text-center col-12 mt-5 container pb-2 ">Modifiez vos informations</h2>
        <div className="edit container p-4 rounded-4">
            <section className="edit__profile">
                <form className="d-flex col-12 w-100 justify-content-around">
                    <div className="edit__profile--info pl-5">
                        <div className="edit__email d-flex flex-column  mt-4">
                            <h4 className="">Nouvelle adresse email</h4>
                            <input type="email" placeholder="jeandupont@gmail.com" className="form-control" onChange={(e)=>{
                            setEmail(e.target.value)
                        }}/>
                        </div>
                        <div className="edit__email d-flex flex-column  mt-4">
                            <h4 className="">Confirmation adresse email</h4>
                            <input type="email" placeholder="jeandupont@gmail.com" className="form-control" onChange={(e)=>{
                            setEmail(e.target.value)
                        }}/>
                        </div>
                        <div className="edit__password d-flex flex-column  mt-4">
                            <h4 className="">Nouveau mot de passe</h4>
                            <input type="password" placeholder="8 caractères, un chiffre, une majuscule et un caractère special" className="form-control" onChange={(e)=>{
                            setNewPassword(e.target.value)
                        }}/>
                        </div>
                        <div className="edit__password d-flex flex-column  mt-4">
                            <h4 className="">Confirmation mot de passe</h4>
                            <input type="password" placeholder="8 caractères, un chiffre, une majuscule et un caractère special" className="form-control"  onChange={(e)=>{
                            setNewPasswordRepeat(e.target.value)
                        }}/>
                        </div>
                    </div>
                    <div className="edit__profile--media">
                    <div className="edit__bio d-flex flex-column mt-2">
                                <h4 className="">Changer votre bio</h4>
                                <textarea maxLength={184} placeholder="Présentez vous !" style={{height:'100px'}} row={4} className="form-control" onChange={(e)=>{
                            setBio(e.target.value)
                        }}/>
                        </div>
                        <div className="edit__password d-flex flex-column mt-2">
                                <h4 className="">Mot de passe actuel pour confirmer</h4>
                                <input type="password" placeholder="8 caractères, un chiffre, une majuscule et un caractère special" className="form-control"/>
                        </div>
                        <div className="edit__profile--picture d-flex flex-row mt-5">
                            <img src={user.picture} className="edit__picture rounded-circle bg-light"></img>
                            <div className="d-flex flex-column">
                                <p>Nouvelle photo de profil ?</p>
                                <input className="form-control form-control-sm btn" id="formFileSm" style={{fontSize:"14px"}} type="file" onChange={onImageChange} />
                            </div>
                        </div>
                        <div className="d-flex">
                            <button className="btn-secondary btn rounded-5 align-items-end p-3  offset-2 mt-5" onClick={onClickHandler}>Confirmer</button>
                            <button className="btn-secondary btn btn-danger rounded-5 align-items-end offset-1 p-3 mt-5" onClick={deleteUser}>Supprimer compte</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
        </>
    )
}

export default EditProfile