import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProfilePic from "../style/ressources/new.webp"

function Profile() {
    return (
<main className="bg-light profile__homepage container-fluid h-100">
        <div className="container bg-light h-100 justify-content-center d-flex">
            <div className="profile__card row container">
                <img className=" profile__card--img col-sm-2 mt-2 mb-2" src={ProfilePic} alt="photo de profil"></img>
                <h2 className="col-sm-6 offset-4 align-self-center">Nom prénom de l'utilisateur</h2>
            </div>
        </div>
        <div className="pb-5 ml-2">
            <h4 className="mt-3 col-sm-2 offset-1">Bio</h4>
            <aside className="bg-light container">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur nam nulla sequi officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci corporis quia facere enim exercitationem?
            </aside>
        </div>
        <section className="container">
            <h4>Dernières publications</h4>
        </section>
</main>
    );
  }
  
export default Profile;