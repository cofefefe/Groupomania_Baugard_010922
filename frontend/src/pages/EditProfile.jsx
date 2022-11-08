import {UserContext} from "../Utils/userContext";
import Nav from "../pages/Header"
import { AiFillPropertySafety } from "react-icons/ai";
import { useState, useContext } from "react";


function EditProfile(props){
    const [image, setImage] = useState('')
    const [user] = useContext(UserContext)

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img);
            console.log("img", img)
        }
    };
    console.log(user)

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
                            <input type="email" placeholder="jeandupont@gmail.com" className="form-control"/>
                        </div>
                        <div className="edit__email d-flex flex-column  mt-4">
                            <h4 className="">Confirmation adresse email</h4>
                            <input type="email" placeholder="jeandupont@gmail.com" className="form-control"/>
                        </div>
                        <div className="edit__password d-flex flex-column  mt-4">
                            <h4 className="">Nouveau mot de passe</h4>
                            <input type="password" placeholder="8 caractères, un chiffre, une majuscule et un caractère special" className="form-control"/>
                        </div>
                        <div className="edit__password d-flex flex-column  mt-4">
                            <h4 className="">Confirmation mot de passe</h4>
                            <input type="password" placeholder="8 caractères, un chiffre, une majuscule et un caractère special" className="form-control"/>
                        </div>
                    </div>
                    <div className="edit__profile--media">
                    <div className="edit__bio d-flex flex-column mt-2">
                                <h4 className="">Changer votre bio</h4>
                                <textarea maxLength={184} placeholder="Présentez vous !" style={{height:'100px'}} row={4} className="form-control"/>
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
                        <button className="btn-secondary btn rounded-5 align-items-end p-3  offset-5 mt-5">Confirmer</button>
                    </div>
                </form>
            </section>
        </div>
        </>
    )
}

export default EditProfile