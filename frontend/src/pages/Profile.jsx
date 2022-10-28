import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { userAuth } from '../api/apiCalls';
import ProfilePic from "../style/ressources/new.webp"
import Nav from "./Header";
import { UserContext } from '../Utils/userContext';
import {useContext} from 'react'




function Profile() {
    const [user] = useContext(UserContext);

    function userGotPost(){
        if(!user.post){
            return (<p>Pas encore de publication ?</p>)
        }
        return (<>{user.post}</>)
    }

    const date = user.createdAt.toLocaleString('fr-FR', { month: 'long', day: 'numeric' })
    return (
        <>
            <Nav/>
            <main className="bg-light profile__homepage container-fluid h-100">
                <div className="container bg-light h-100 justify-content-center d-flex">
                    <div className="profile__card row container">
                        <img className=" profile__card--img col-sm-2 mt-2 mb-2 rounded-5 container" src={user.picture} alt="photo de profil"></img>
                        <h2 className="col-sm-6 offset-4 align-self-center">{user.name + ' ' + user.firstname}</h2>
                    </div>
                </div>
                <div className="pb-5 ml-2 container">
                    <h4 className="mt-3 col-sm-2">Bio :</h4>
                    
                    <aside className="bg-light">
                        {user.bio}
                        <div>
                            <div className="mt-2">inscris depuis le {date}</div>
                        </div>
                    </aside>
                </div>
                <section className="container">
                    <h4>Dernières publications</h4>
                    {
                        userGotPost()
                    }
                </section>
            </main>
        </>
    );
  }
  
export default Profile;