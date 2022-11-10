import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { updateUser, userAuth } from '../api/apiCalls';
import ProfilePic from "../style/ressources/new.webp"
import Nav from "./Header";
import { UserContext } from '../Utils/userContext';
import { useState, useContext, useRef } from "react";



function Profile() {
    const [user] = useContext(UserContext);
    const [imageUrl, setImageUrl] = useState('')
    function userGotPost(){
        if(!user.post){
            return (<p>Pas encore de publication ?</p>)
        }
        return (<>{user.post}</>)
    }

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            setImageUrl(img)
        }
    }

    const addImg = (req,res,next) => {
        let params = {
            user : {
                imageUrl : imageUrl.name,
                id: user._id
            }
        }
        updateUser(params).then(function () {
            console.log('updating user pic')
        })
    } 


    

    const date = user.createdAt
    
    return (
        <>
            <Nav/>
            <main className="bg-light profile__homepage container-fluid h-100">
                <div className="container bg-light h-100 justify-content-center d-flex">
                    <div className="profile__card row container">
                    <div className="edit__profile--picture d-flex flex-row mt-5 mn-4">
                            <img src={user.picture} className="edit__picture rounded-circle bg-light"></img>
                            <div className="d-flex flex-column offset-1">
                                <p>Nouvelle photo de profil ?</p>
                                <div className="d-flex">
                                    <input className="form-control form-control-sm btn" id="formFileSm" style={{fontSize:"14px"}} type="file" onChange={onImageChange} />
                                    <button className="btn btn-secondary"  onClick={addImg} >Valider</button>
                                </div>
                            </div>
                        </div>
                        <h2 className="col-sm-6 align-self-center mt-4">{user.name + ' ' + user.firstname}</h2>
                    </div>
                </div>
                <div className="bio pb-5 ml-2 container mt-4">
                    <h4 className="mt-3 col-sm-2">Bio :</h4>
                    
                    <aside className="bg-light">
                        {user.bio}
                        <div>
                            <div className="mt-2">inscris depuis le {(new Date(user.createdAt)).toLocaleString()}</div>
                        </div>
                    </aside>
                </div>
            </main>
        </>
    );
  }
  
export default Profile;