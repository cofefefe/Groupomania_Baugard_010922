import image_main from '../style/ressources/entreprise.webp'
import image_meeting from '../style/ressources/meeting.webp'
import image_new from '../style/ressources/new.webp'
import logo from '../style/ressources/logo.png'
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from "./Header";

function Header_main() {
    return (
        <>
            <main className="main">
                <img className="main__img col-12" src={image_main}></img>
                <div className="main__banner">
                    <div className="container col-12">
                        <div className="main__cards row justify-content-between align-items-center">
                            <aside className="container__card col-lg-5 col-sm-12">
                                <img src={image_new} alt="image d'employé travaillant"></img>
                                <div className="container__card--register ">
                                    <h4><span>Pas</span> inscrit ?</h4>
                                    <p>Inscrivez vous !</p>
                                    <Link to="/signup">
                                        <button className="">Inscription</button>
                                    </Link>
                                </div>
                            </aside>
                            <div className="main__logo--card col-1">
                                <img className="main__logo" src={logo} alt="logo groupomania"/>
                            </div>
                            <aside className="container__card col-lg-5 col-sm-12">
                                <img src={image_meeting} alt="image d'employé travaillant"></img>
                                <div className="container__card--connect">
                                    <h4><span>Déjà</span> inscrit ?</h4>
                                    <p>Connectez vous !</p>
                                    <Link to="/signin">
                                        <button className="">Connexion</button>
                                    </Link>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
  }
  
  export default Header_main;
  